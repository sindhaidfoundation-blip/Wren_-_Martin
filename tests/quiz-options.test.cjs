"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { shuffleQuestionOptions } = require("../src/utils/quizOptions");

test("keeps the correct answer attached to its option after shuffling", () => {
  const question = {
    q: "Choose the verb.",
    options: ["quickly", "writes", "blue", "under"],
    answer: 1,
    why: "A verb expresses an action or state."
  };
  const shuffled = shuffleQuestionOptions(question, () => 0);

  assert.equal(shuffled.options[shuffled.answer], "writes");
  assert.equal(shuffled.why, question.why);
  assert.equal(shuffled.q, question.q);
});

test("does not mutate the original question or options", () => {
  const question = { q: "Pick the noun.", options: ["runs", "garden", "soft"], answer: 1 };
  const originalOptions = [...question.options];

  shuffleQuestionOptions(question, () => 0.75);

  assert.deepEqual(question.options, originalOptions);
  assert.equal(question.answer, 1);
});

test("supports a single-option question without changing its answer index", () => {
  const question = { q: "One choice", options: ["only"], answer: 0 };
  assert.deepEqual(shuffleQuestionOptions(question), question);
});

test("rejects malformed questions instead of failing later in quiz rendering", () => {
  assert.throws(() => shuffleQuestionOptions(null), /options array/);
  assert.throws(() => shuffleQuestionOptions({ options: "not-an-array" }), /options array/);
  assert.throws(() => shuffleQuestionOptions({ options: ["A", "B"], answer: 4 }), /valid correct-answer index/);
  assert.throws(() => shuffleQuestionOptions({ options: ["A", "B"], answer: 0 }, null), /random-number function/);
});
