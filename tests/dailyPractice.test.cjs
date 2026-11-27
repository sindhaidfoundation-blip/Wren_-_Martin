"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { buildDailyPracticeSet, isValidDateKey } = require("../src/utils/dailyPractice");

function makeBank(size = 30) {
  return Array.from({ length: size }, (_, index) => ({
    q: "Question " + index,
    options: ["Wrong A " + index, "Correct " + index, "Wrong B " + index],
    answer: 1,
    why: "The second option is correct for question " + index + ".",
    urduWhy: "یہ سوال " + index + " کی وضاحت ہے۔"
  }));
}

test("date keys are checked as real calendar dates", () => {
  assert.equal(isValidDateKey("2026-11-27"), true);
  assert.equal(isValidDateKey("2026-02-30"), false);
  assert.equal(isValidDateKey("27-11-2026"), false);
});

test("the same date always returns the same ten-question set", () => {
  const bank = makeBank();
  const first = buildDailyPracticeSet(bank, "2026-11-27");
  const second = buildDailyPracticeSet(bank, "2026-11-27");

  assert.equal(first.length, 10);
  assert.deepEqual(first, second);
  assert.equal(new Set(first.map(item => item.q)).size, 10);
});

test("a new date rotates the daily set without changing answer mapping", () => {
  const bank = makeBank();
  const first = buildDailyPracticeSet(bank, "2026-11-27");
  const next = buildDailyPracticeSet(bank, "2026-11-28");

  assert.notDeepEqual(first.map(item => item.q), next.map(item => item.q));
  for (const question of [...first, ...next]) {
    assert.equal(question.options[question.answer], "Correct " + question.q.slice("Question ".length));
  }
});

test("selection does not mutate the bank or its option arrays", () => {
  const bank = makeBank();
  const original = JSON.parse(JSON.stringify(bank));
  const selected = buildDailyPracticeSet(bank, "2026-11-27");

  assert.deepEqual(bank, original);
  assert.notEqual(selected[0].options, bank.find(item => item.q === selected[0].q).options);
});

test("duplicate and malformed questions are skipped safely", () => {
  const bank = makeBank(3);
  bank.push({ ...bank[0] });
  bank.push({ q: "Broken answer", options: ["A", "B"], answer: 4, why: "Invalid." });
  bank.push({ q: "No explanation", options: ["A", "B"], answer: 0, why: "" });

  const selected = buildDailyPracticeSet(bank, "2026-11-27", 10);
  assert.equal(selected.length, 3);
  assert.equal(new Set(selected.map(item => item.q)).size, 3);
});

test("invalid dates are rejected and oversized requests return the available bank", () => {
  assert.throws(() => buildDailyPracticeSet(makeBank(), "2026-02-30"), /valid local date/);
  assert.equal(buildDailyPracticeSet(makeBank(4), "2026-11-27", 10).length, 4);
});
