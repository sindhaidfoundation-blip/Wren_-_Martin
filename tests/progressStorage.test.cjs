"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const {
  createEmptyStats,
  createProgressSnapshot,
  createQueuedProgressWriter,
  restoreProgress
} = require("../src/utils/progressStorage");

const lessonIds = ["the-sentence", "nouns"];
const fullCourseQuestions = [
  {
    q: "Which word is a noun?",
    options: ["quickly", "teacher", "under"],
    answer: 1,
    why: "Teacher names a person.",
    lessonId: "nouns",
    lessonTitle: "Nouns"
  },
  {
    q: "Choose the correct article.",
    options: ["a hour", "an hour", "the hour only"],
    answer: 1,
    why: "Hour begins with a vowel sound.",
    lessonId: "the-sentence",
    lessonTitle: "The Sentence"
  }
];

test("invalid or missing storage data returns safe empty progress", () => {
  const invalid = restoreProgress("{not-json", lessonIds, fullCourseQuestions);
  const missing = restoreProgress(null, lessonIds, fullCourseQuestions);

  assert.deepEqual(invalid.completed, []);
  assert.deepEqual(missing.completed, []);
  assert.deepEqual(invalid.stats, createEmptyStats());
  assert.equal(invalid.quizSession, null);
});

test("progress restoration removes unknown lessons and malformed statistics", () => {
  const restored = restoreProgress({
    completed: ["nouns", "unknown", "nouns", 7],
    stats: {
      quizzesTaken: -3,
      questionsAnsweredCorrectly: "12",
      dailySessions: 4.5,
      lastPracticeDate: "2026-02-30",
      dailyPracticeDates: ["2026-11-25", "2026-11-25", "2026-02-30", "2026-11-24"],
      quizHistory: [
        { title: "Nouns", lessonId: "nouns", correct: 3, total: 4, lessonBreakdown: [{ lessonId: "nouns", correct: 3, total: 4 }] },
        { title: "Broken", correct: 8, total: 2 }
      ],
      wrongAnswers: [
        { question: "Pick a noun.", options: ["quickly", "teacher"], answer: 1, selectedAnswer: "quickly", explanation: "Teacher names a person.", lessonId: "nouns" },
        { question: "Broken answer", options: ["only one"], answer: 0 }
      ]
    }
  }, lessonIds, fullCourseQuestions);

  assert.deepEqual(restored.completed, ["nouns"]);
  assert.deepEqual(restored.stats.dailyPracticeDates, ["2026-11-24", "2026-11-25"]);
  assert.equal(restored.stats.quizzesTaken, 0);
  assert.equal(restored.stats.questionsAnsweredCorrectly, 0);
  assert.equal(restored.stats.dailySessions, 0);
  assert.equal(restored.stats.quizHistory.length, 1);
  assert.equal(restored.stats.quizHistory[0].percent, 75);
  assert.equal(restored.stats.wrongAnswers.length, 1);
  assert.equal(restored.stats.wrongAnswers[0].correctAnswer, "teacher");
});

test("an unfinished topic quiz restores valid questions and answer selections", () => {
  const restored = restoreProgress({
    quizSession: {
      type: "topic",
      lessonId: "nouns",
      returnTab: "MCQs",
      questions: fullCourseQuestions,
      answers: { "0": 1, "1": 9, "99": 0, invalid: 1 }
    }
  }, lessonIds, fullCourseQuestions);

  assert.equal(restored.quizSession.type, "topic");
  assert.equal(restored.quizSession.lessonId, "nouns");
  assert.equal(restored.quizSession.returnTab, "MCQs");
  assert.deepEqual(restored.quizSession.answers, { 0: 1 });
  assert.equal(restored.quizSession.questions.length, 2);
  assert.equal(restored.quizSession.questions[0].why, "Teacher names a person.");
});

test("legacy timed exam data is migrated and expired deadlines remain submit-ready", () => {
  const restored = restoreProgress({
    examSession: {
      deadline: 1000,
      totalQuestions: 2,
      answers: { "0": 1, "1": 7 },
      certificateId: "WM-LEGACY"
    }
  }, lessonIds, fullCourseQuestions);

  assert.equal(restored.quizSession.type, "exam");
  assert.equal(restored.quizSession.deadline, 1000);
  assert.deepEqual(restored.quizSession.answers, { 0: 1 });
  assert.equal(restored.quizSession.certificateId, "WM-LEGACY");
});

test("stale exam sessions and malformed quiz questions are discarded", () => {
  const staleExam = restoreProgress({
    quizSession: { type: "exam", deadline: 5000, totalQuestions: 99, answers: {} }
  }, lessonIds, fullCourseQuestions);
  const malformedQuiz = restoreProgress({
    quizSession: { type: "daily", questions: [{ q: "Missing options", options: [], answer: 0 }], answers: {} }
  }, lessonIds, fullCourseQuestions);

  assert.equal(staleExam.quizSession, null);
  assert.equal(malformedQuiz.quizSession, null);
});

test("malformed option slots cannot shift a restored correct-answer index", () => {
  const restored = restoreProgress({
    quizSession: {
      type: "daily",
      questions: [{ q: "Choose one.", options: ["A", null, "B"], answer: 1 }],
      answers: { "0": 1 }
    }
  }, lessonIds, fullCourseQuestions);

  assert.equal(restored.quizSession, null);
});

test("progress snapshots keep the learner name out of persistent data", () => {
  const snapshot = createProgressSnapshot(["nouns"], createEmptyStats(), null);
  assert.deepEqual(JSON.parse(snapshot), {
    completed: ["nouns"],
    stats: createEmptyStats(),
    quizSession: null
  });
  assert.equal(snapshot.includes("certificateName"), false);
});

test("queued writes preserve order and continue after a storage failure", async () => {
  const calls = [];
  const errors = [];
  let releaseFirst;
  let markFirstStarted;
  const firstGate = new Promise(resolve => { releaseFirst = resolve; });
  const firstStarted = new Promise(resolve => { markFirstStarted = resolve; });
  const storage = {
    async setItem(_key, value) {
      calls.push("start:" + value);
      if (value === "first") {
        markFirstStarted();
        await firstGate;
      }
      if (value === "broken") throw new Error("storage unavailable");
      calls.push("end:" + value);
    }
  };
  const write = createQueuedProgressWriter(storage, "progress", error => errors.push(error.message));

  const first = write("first");
  const second = write("second");
  await firstStarted;
  assert.deepEqual(calls, ["start:first"]);
  releaseFirst();
  await Promise.all([first, second]);
  await write("broken");
  await write("last");

  assert.deepEqual(calls, [
    "start:first", "end:first",
    "start:second", "end:second",
    "start:broken",
    "start:last", "end:last"
  ]);
  assert.deepEqual(errors, ["storage unavailable"]);
});
