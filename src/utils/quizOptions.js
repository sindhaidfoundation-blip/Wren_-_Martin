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

  const options = question.options.map((option, index) => ({
    option,
    correct: index === question.answer
  }));

  for (let index = options.length - 1; index > 0; index -= 1) {
    const sample = random();
    const swapIndex = Math.min(index, Math.max(0, Math.floor(sample * (index + 1))));
    [options[index], options[swapIndex]] = [options[swapIndex], options[index]];
  }

  return {
    ...question,
    options: options.map(item => item.option),
    answer: options.findIndex(item => item.correct)
  };
}

module.exports = { shuffleQuestionOptions };
