const darkModeButton=document.querySelector('[data-js="dark-mode-button"]');
const darkModeBody=document.querySelector('[data-js="dark-mode-body"]');

darkModeButton.addEventListener("click", () => {
  darkModeBody.classList.toggle("dark-mode");

});