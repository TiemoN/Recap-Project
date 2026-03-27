const answerButton = document.querySelector('[data-js="answer-button"]');
const answerText = document.querySelector('[data-js="answerHidden"]');







answerButton.addEventListener("click", () => {
  answerText.toggleAttribute("hidden");
});

const bookmarkChangeColorButton = document.querySelector(
  '[data-js="button-bookmark"]',
);

bookmarkChangeColorButton.addEventListener("click", () => {
  bookmarkChangeColorButton.classList.toggle("bookmarkChange");
});







