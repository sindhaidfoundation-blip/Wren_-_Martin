"use strict";

function hashSeed(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededRandom(seed) {
  let state = seed >>> 0;
  return function nextRandom() {
    state += 0x6D2B79F5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function isValidDateKey(dateKey) {
  if (typeof dateKey !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) return false;
  const parsed = new Date(dateKey + "T00:00:00.000Z");
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === dateKey;
}

/**
 * Select a reproducible daily set. The same local calendar date always yields
 * the same questions, while a new date changes the selection. The source bank
 * and its question objects are never mutated.
 */
function buildDailyPracticeSet(questionBank, dateKey, count = 10) {
  if (!isValidDateKey(dateKey)) {
    throw new TypeError("A valid local date in YYYY-MM-DD format is required.");
  }
  if (!Array.isArray(questionBank)) return [];

  const seen = new Set();
  const validQuestions = questionBank.filter(question => {
    if (
      !question ||
      typeof question.q !== "string" ||
      !question.q.trim() ||
      !Array.isArray(question.options) ||
      question.options.length < 2 ||
      question.options.some(option => typeof option !== "string" || !option.trim()) ||
      !Number.isInteger(question.answer) ||
      question.answer < 0 ||
      question.answer >= question.options.length ||
      typeof question.why !== "string" ||
      !question.why.trim()
    ) return false;

    const key = question.q.trim().toLocaleLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  if (!validQuestions.length) return [];
  const requestedCount = Number.isInteger(count) && count > 0 ? count : 10;
  const selectedCount = Math.min(requestedCount, validQuestions.length);
  const shuffled = validQuestions.map((_, index) => index);
  const random = seededRandom(hashSeed(dateKey));

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled.slice(0, selectedCount).map(index => ({
    ...validQuestions[index],
    options: [...validQuestions[index].options]
  }));
}

module.exports = { buildDailyPracticeSet, isValidDateKey };
