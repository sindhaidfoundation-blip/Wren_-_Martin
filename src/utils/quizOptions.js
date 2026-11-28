"use strict";

/**
 * Shuffle a quiz question's choices while keeping its correct-answer index
 * attached to the correct choice. The optional RNG makes this deterministic
 * in unit tests without changing production behavior.
 */
function shuffleQuestionOptions(question, random = Math.random) {
  if (!question || !Array.isArray(question.options)) {
    throw new TypeError("A question with an options array is required.");
  }
  if (
    question.options.length < 1 ||
    !Number.isInteger(question.answer) ||
    question.answer < 0 ||
    question.answer >= question.options.length ||
    question.options.some(option => typeof option !== "string" || !option.trim())
  ) {
    throw new TypeError("A question with a valid correct-answer index and non-empty options is required.");
  }
  if (typeof random !== "function") {
    throw new TypeError("A random-number function is required.");
  }

  const options = question.options.map((option, index) => ({
    option,
    correct: index === question.answer
  }));

  for (let index = options.length - 1; index > 0; index -= 1) {
    const rawSample = Number(random());
    const sample = Number.isFinite(rawSample)
      ? Math.min(1 - Number.EPSILON, Math.max(0, rawSample))
      : 0;
    const swapIndex = Math.floor(sample * (index + 1));
    [options[index], options[swapIndex]] = [options[swapIndex], options[index]];
  }

  return {
    ...question,
    options: options.map(item => item.option),
    answer: options.findIndex(item => item.correct)
  };
}

module.exports = { shuffleQuestionOptions };
