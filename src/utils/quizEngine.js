"use strict";

function asAnswers(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}

function calculateQuizResult(questions, answers) {
  const items = Array.isArray(questions) ? questions : [];
  const selections = asAnswers(answers);
  let answered = 0;
  let correct = 0;

  items.forEach((question, index) => {
    if (!question || !Array.isArray(question.options)) return;
    const selected = selections[index];
    const validSelection = Number.isInteger(selected) && selected >= 0 && selected < question.options.length;
    if (validSelection) answered += 1;
    if (validSelection && Number.isInteger(question.answer) && selected === question.answer) correct += 1;
  });

  const total = items.length;
  return {
    total,
    answered,
    unanswered: total - answered,
    correct,
    incorrect: total - correct,
    percent: total ? Math.round((correct / total) * 100) : 0
  };
}

function buildLessonBreakdown(questions, answers, lessons) {
  const items = Array.isArray(questions) ? questions : [];
  const selections = asAnswers(answers);
  return (Array.isArray(lessons) ? lessons : []).map(lesson => {
    const lessonQuestions = items
      .map((question, index) => ({ question, index }))
      .filter(item => item.question && item.question.lessonId === lesson.id);
    const correct = lessonQuestions.filter(item => selections[item.index] === item.question.answer).length;
    const total = lessonQuestions.length;
    return {
      lessonId: lesson.id,
      title: lesson.title,
      correct,
      total,
      percent: total ? Math.round((correct / total) * 100) : 0
    };
  });
}

function createQuizAttempt({ title, lessonId, date, result, lessonBreakdown }) {
  const score = result && typeof result === "object"
    ? result
    : calculateQuizResult([], {});
  return {
    title: typeof title === "string" ? title.slice(0, 160) : "Quiz",
    lessonId: typeof lessonId === "string" ? lessonId : null,
    date: typeof date === "string" ? date : null,
    correct: score.correct,
    total: score.total,
    percent: score.percent,
    lessonBreakdown: Array.isArray(lessonBreakdown) ? lessonBreakdown : []
  };
}

function createWrongAnswerRecords(questions, answers, context = {}) {
  const items = Array.isArray(questions) ? questions : [];
  const selections = asAnswers(answers);
  const selectedLesson = context.selectedLesson && typeof context.selectedLesson === "object"
    ? context.selectedLesson
    : null;
  const title = typeof context.title === "string" ? context.title : "Practice";
  const date = typeof context.date === "string" ? context.date : null;
  const records = [];

  items.forEach((question, index) => {
    if (
      !question ||
      typeof question.q !== "string" ||
      !Array.isArray(question.options) ||
      !Number.isInteger(question.answer) ||
      question.answer < 0 ||
      question.answer >= question.options.length ||
      selections[index] === question.answer
    ) return;

    const selectedIndex = selections[index];
    records.push({
      question: question.q,
      options: question.options.slice(),
      answer: question.answer,
      selectedAnswer: Number.isInteger(selectedIndex) && selectedIndex >= 0 && selectedIndex < question.options.length
        ? question.options[selectedIndex]
        : "Not answered",
      correctAnswer: question.options[question.answer],
      explanation: typeof question.why === "string" ? question.why : "",
      explanationUrdu: typeof question.urduWhy === "string" ? question.urduWhy : "",
      lessonTitle: typeof question.lessonTitle === "string"
        ? question.lessonTitle
        : selectedLesson && typeof selectedLesson.title === "string" ? selectedLesson.title : title,
      lessonId: typeof question.lessonId === "string"
        ? question.lessonId
        : selectedLesson && typeof selectedLesson.id === "string" ? selectedLesson.id : null,
      date
    });
  });

  return records;
}

function mergeWrongAnswers(existing, newRecords, questions, answers, isMistakePractice) {
  const previous = Array.isArray(existing) ? existing : [];
  const added = Array.isArray(newRecords) ? newRecords : [];
  const items = Array.isArray(questions) ? questions : [];
  const selections = asAnswers(answers);
  const remaining = isMistakePractice
    ? previous.filter(item => !items.some((question, index) =>
      item && question && item.question === question.q && selections[index] === question.answer
    ))
    : previous;

  const merged = [];
  const seen = new Set();
  for (const item of [...added, ...remaining]) {
    if (!item || typeof item.question !== "string") continue;
    const identity = item.lessonId || item.lessonTitle || "";
    const key = JSON.stringify([identity, item.question]);
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push(item);
    if (merged.length === 50) break;
  }
  return merged;
}

module.exports = {
  buildLessonBreakdown,
  calculateQuizResult,
  createQuizAttempt,
  createWrongAnswerRecords,
  mergeWrongAnswers
};
