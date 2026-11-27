"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const {
  buildLessonBreakdown,
  calculateQuizResult,
  createQuizAttempt,
  createWrongAnswerRecords,
  mergeWrongAnswers
} = require("../src/utils/quizEngine");

const lessons = [
  { id: "nouns", title: "Nouns" },
  { id: "verbs", title: "Verbs" },
  { id: "adjectives", title: "Adjectives" }
];
const questions = [
  {
    q: "Which word names a person?",
    options: ["quickly", "teacher", "under"],
    answer: 1,
    why: "Teacher names a person.",
    lessonId: "nouns",
    lessonTitle: "Nouns"
  },
  {
    q: "Choose the action verb.",
    options: ["blue", "carefully", "writes"],
    answer: 2,
    why: "Writes describes an action.",
    lessonId: "verbs",
    lessonTitle: "Verbs"
  },
  {
    q: "Which word describes a noun?",
    options: ["bright", "slowly", "because"],
    answer: 0,
    why: "Bright describes a person or thing.",
    lessonId: "adjectives",
    lessonTitle: "Adjectives"
  }
];

test("quiz scoring counts correct, incorrect and unanswered questions", () => {
  const result = calculateQuizResult(questions, { 0: 1, 1: 0 });
  assert.deepEqual(result, {
    total: 3,
    answered: 2,
    unanswered: 1,
    correct: 1,
    incorrect: 2,
    percent: 33
  });
});

test("exam breakdown includes every lesson and calculates per-topic percentages", () => {
  const breakdown = buildLessonBreakdown(questions.slice(0, 2), { 0: 1, 1: 2 }, lessons);
  assert.deepEqual(breakdown, [
    { lessonId: "nouns", title: "Nouns", correct: 1, total: 1, percent: 100 },
    { lessonId: "verbs", title: "Verbs", correct: 1, total: 1, percent: 100 },
    { lessonId: "adjectives", title: "Adjectives", correct: 0, total: 0, percent: 0 }
  ]);
});

test("quiz attempts preserve totals, score, date and lesson breakdown", () => {
  const result = calculateQuizResult(questions, { 0: 1, 1: 2, 2: 0 });
  const attempt = createQuizAttempt({
    title: "Full course exam",
    lessonId: null,
    date: "2026-11-26",
    result,
    lessonBreakdown: buildLessonBreakdown(questions, { 0: 1, 1: 2, 2: 0 }, lessons)
  });
  assert.equal(attempt.correct, 3);
  assert.equal(attempt.total, 3);
  assert.equal(attempt.percent, 100);
  assert.equal(attempt.date, "2026-11-26");
  assert.equal(attempt.lessonBreakdown.length, 3);
});

test("mistake records retain selected answer, correct answer and original explanation", () => {
  const records = createWrongAnswerRecords(questions, { 0: 0, 1: 2 }, {
    title: "Daily practice",
    date: "2026-11-26"
  });
  assert.equal(records.length, 2);
  assert.equal(records[0].selectedAnswer, "quickly");
  assert.equal(records[0].correctAnswer, "teacher");
  assert.equal(records[0].explanation, "Teacher names a person.");
  assert.equal(records[0].lessonTitle, "Nouns");
  assert.equal(records[1].selectedAnswer, "Not answered");
});

test("mistake review removes corrected items but keeps unresolved mistakes", () => {
  const existing = [
    { question: questions[0].q, selectedAnswer: "quickly" },
    { question: questions[1].q, selectedAnswer: "blue" },
    { question: "An older question", selectedAnswer: "wrong" }
  ];
  const newRecords = createWrongAnswerRecords(questions.slice(0, 2), { 0: 1, 1: 0 }, {
    title: "Mistake review",
    date: "2026-11-26"
  });
  const merged = mergeWrongAnswers(
    existing,
    newRecords,
    questions.slice(0, 2),
    { 0: 1, 1: 0 },
    true
  );
  assert.deepEqual(merged.map(item => item.question), [
    questions[1].q,
    "An older question"
  ]);
  assert.equal(merged[0].selectedAnswer, "blue", "the newest mistake record should be retained");
});

test("empty quizzes produce a safe zero score", () => {
  assert.deepEqual(calculateQuizResult([], {}), {
    total: 0,
    answered: 0,
    unanswered: 0,
    correct: 0,
    incorrect: 0,
    percent: 0
  });
});
