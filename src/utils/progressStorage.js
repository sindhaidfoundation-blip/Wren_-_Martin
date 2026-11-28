"use strict";

function isRecord(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function isDateKey(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(value + "T00:00:00.000Z");
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

function nonNegativeInteger(value) {
  return Number.isSafeInteger(value) && value >= 0 ? value : 0;
}

function createEmptyStats() {
  return {
    quizzesTaken: 0,
    questionsAnsweredCorrectly: 0,
    dailySessions: 0,
    lastPracticeDate: null,
    dailyPracticeDates: [],
    quizHistory: [],
    wrongAnswers: []
  };
}

function sanitizeQuestion(raw, validLessonIds) {
  if (!isRecord(raw) || typeof raw.q !== "string" || !raw.q.trim()) return null;
  if (
    !Array.isArray(raw.options) ||
    raw.options.length < 2 ||
    raw.options.length > 6 ||
    raw.options.some(option => typeof option !== "string" || !option.trim())
  ) return null;

  // Reject malformed option slots instead of compacting them and changing answer indexes.
  const options = raw.options.map(option => option.trim());
  if (!Number.isInteger(raw.answer) || raw.answer < 0 || raw.answer >= options.length) return null;

  const question = {
    q: raw.q.trim().slice(0, 1200),
    options,
    answer: raw.answer,
    why: typeof raw.why === "string" ? raw.why.slice(0, 2400) : ""
  };
  if (typeof raw.urduWhy === "string") question.urduWhy = raw.urduWhy.slice(0, 2400);
  if (typeof raw.lessonTitle === "string") question.lessonTitle = raw.lessonTitle.slice(0, 160);
  if (typeof raw.lessonId === "string" && validLessonIds.has(raw.lessonId)) question.lessonId = raw.lessonId;
  return question;
}

function sanitizeAnswers(rawAnswers, questions) {
  if (!isRecord(rawAnswers)) return {};
  const answers = {};
  Object.keys(rawAnswers).forEach(key => {
    if (!/^(0|[1-9]\d*)$/.test(key)) return;
    const index = Number(key);
    const answer = rawAnswers[key];
    if (
      Number.isSafeInteger(index) &&
      index >= 0 &&
      index < questions.length &&
      Number.isInteger(answer) &&
      answer >= 0 &&
      answer < questions[index].options.length
    ) {
      answers[index] = answer;
    }
  });
  return answers;
}

function sanitizeLessonBreakdown(rawBreakdown, validLessonIds) {
  if (!Array.isArray(rawBreakdown)) return [];
  return rawBreakdown
    .filter(item =>
      isRecord(item) &&
      typeof item.lessonId === "string" &&
      validLessonIds.has(item.lessonId) &&
      Number.isSafeInteger(item.total) &&
      item.total > 0 &&
      Number.isSafeInteger(item.correct) &&
      item.correct >= 0 &&
      item.correct <= item.total
    )
    .map(item => ({ lessonId: item.lessonId, correct: item.correct, total: item.total }));
}

function sanitizeStats(rawStats, validLessonIds) {
  if (!isRecord(rawStats)) return createEmptyStats();

  const dailyPracticeDates = Array.isArray(rawStats.dailyPracticeDates)
    ? [...new Set(rawStats.dailyPracticeDates.filter(isDateKey))].sort().slice(-90)
    : [];

  const quizHistory = Array.isArray(rawStats.quizHistory)
    ? rawStats.quizHistory
      .filter(item =>
        isRecord(item) &&
        typeof item.title === "string" &&
        item.title.trim() &&
        Number.isSafeInteger(item.total) &&
        item.total > 0 &&
        Number.isSafeInteger(item.correct) &&
        item.correct >= 0 &&
        item.correct <= item.total
      )
      .slice(0, 20)
      .map(item => ({
        title: item.title.trim().slice(0, 160),
        lessonId: typeof item.lessonId === "string" && validLessonIds.has(item.lessonId) ? item.lessonId : null,
        date: isDateKey(item.date) ? item.date : null,
        correct: item.correct,
        total: item.total,
        percent: Math.round((item.correct / item.total) * 100),
        lessonBreakdown: sanitizeLessonBreakdown(item.lessonBreakdown, validLessonIds)
      }))
    : [];

  const wrongAnswers = Array.isArray(rawStats.wrongAnswers)
    ? rawStats.wrongAnswers
      .map(item => {
        if (!isRecord(item)) return null;
        const question = sanitizeQuestion({
          q: item.question,
          options: item.options,
          answer: item.answer,
          why: item.explanation,
          urduWhy: item.explanationUrdu,
          lessonTitle: item.lessonTitle,
          lessonId: item.lessonId
        }, validLessonIds);
        if (!question) return null;
        return {
          question: question.q,
          options: question.options,
          answer: question.answer,
          selectedAnswer: typeof item.selectedAnswer === "string" ? item.selectedAnswer.slice(0, 500) : "Not answered",
          correctAnswer: question.options[question.answer],
          explanation: question.why,
          explanationUrdu: question.urduWhy || "",
          lessonTitle: question.lessonTitle || "Practice",
          lessonId: question.lessonId || null,
          date: isDateKey(item.date) ? item.date : null
        };
      })
      .filter(Boolean)
      .slice(0, 50)
    : [];

  return {
    quizzesTaken: nonNegativeInteger(rawStats.quizzesTaken),
    questionsAnsweredCorrectly: nonNegativeInteger(rawStats.questionsAnsweredCorrectly),
    dailySessions: nonNegativeInteger(rawStats.dailySessions),
    lastPracticeDate: isDateKey(rawStats.lastPracticeDate) ? rawStats.lastPracticeDate : null,
    dailyPracticeDates,
    quizHistory,
    wrongAnswers
  };
}

function restoreQuizSession(rawSession, validLessonIds, fullCourseQuestions) {
  if (!isRecord(rawSession)) return null;
  const allowedTypes = new Set(["exam", "daily", "lesson", "topic", "mistakes"]);
  if (!allowedTypes.has(rawSession.type)) return null;

  let questions;
  if (rawSession.type === "exam") {
    if (
      !Number.isFinite(rawSession.deadline) ||
      !Number.isInteger(rawSession.totalQuestions) ||
      rawSession.totalQuestions !== fullCourseQuestions.length
    ) return null;
    questions = fullCourseQuestions.map(question => sanitizeQuestion(question, validLessonIds));
  } else {
    if (!Array.isArray(rawSession.questions) || rawSession.questions.length < 1 || rawSession.questions.length > 200) return null;
    questions = rawSession.questions.map(question => sanitizeQuestion(question, validLessonIds));
  }
  if (!questions.length || questions.some(question => !question)) return null;

  const requiresLesson = rawSession.type === "lesson" || rawSession.type === "topic";
  const lessonId = requiresLesson && typeof rawSession.lessonId === "string" && validLessonIds.has(rawSession.lessonId)
    ? rawSession.lessonId
    : null;
  if (requiresLesson && !lessonId) return null;

  return {
    type: rawSession.type,
    questions,
    answers: sanitizeAnswers(rawSession.answers, questions),
    lessonId,
    returnTab: rawSession.returnTab === "MCQs" ? "MCQs" : "Lesson",
    deadline: rawSession.type === "exam" ? rawSession.deadline : null,
    certificateId: typeof rawSession.certificateId === "string" ? rawSession.certificateId.slice(0, 100) : null
  };
}

function restoreProgress(raw, lessonIds, fullCourseQuestions) {
  let parsed = raw;
  if (typeof raw === "string") {
    try {
      parsed = JSON.parse(raw);
    } catch (_error) {
      parsed = null;
    }
  }
  if (!isRecord(parsed)) {
    return { completed: [], stats: createEmptyStats(), quizSession: null };
  }

  const validLessonIds = new Set(Array.isArray(lessonIds) ? lessonIds.filter(id => typeof id === "string") : []);
  const completed = Array.isArray(parsed.completed)
    ? [...new Set(parsed.completed.filter(id => typeof id === "string" && validLessonIds.has(id)))]
    : [];
  const stats = sanitizeStats(parsed.stats, validLessonIds);

  // Older app versions saved only a timed full-course exam under examSession.
  const candidateSession = isRecord(parsed.quizSession)
    ? parsed.quizSession
    : isRecord(parsed.examSession)
      ? { ...parsed.examSession, type: "exam" }
      : null;

  return {
    completed,
    stats,
    quizSession: restoreQuizSession(candidateSession, validLessonIds, Array.isArray(fullCourseQuestions) ? fullCourseQuestions : [])
  };
}

function createProgressSnapshot(completed, stats, quizSession) {
  return JSON.stringify({
    completed: Array.isArray(completed) ? completed : [],
    stats: isRecord(stats) ? stats : createEmptyStats(),
    quizSession: isRecord(quizSession) ? quizSession : null
  });
}

function createQueuedProgressWriter(storage, key, onError) {
  let pendingWrite = Promise.resolve();
  return function writeProgress(snapshot) {
    pendingWrite = pendingWrite
      .catch(() => undefined)
      .then(() => storage.setItem(key, snapshot))
      .catch(error => {
        if (typeof onError === "function") {
          try {
            onError(error);
          } catch (_callbackError) {
            // A logging callback must not break later progress writes.
          }
        }
      });
    return pendingWrite;
  };
}

module.exports = {
  createEmptyStats,
  createProgressSnapshot,
  createQueuedProgressWriter,
  restoreProgress
};
