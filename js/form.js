

const submitButton=document.querySelector('[data-js="submit-button"]');

submitButton.addEventListener("click",()=>{

const answerInput=document.querySelector('[data-js="answer-input"]');
const questionInput=document.querySelector('[data-js="question-input"]');
const tagInput=document.querySelector('[data-js="tag-input"]');
const cardContainer=document.querySelector('[data-js="container"]');

const bookmarkButton=document.createElement("button");
const cardSection=document.createElement("section");
const questionText=document.createElement("p");
const answerText=document.createElement("p");
const showButton=document.createElement("button");
const tagList=document.createElement("ul");
const tags=document.createElement("li");

bookmarkButton.classList.add("bookmark");
cardSection.classList.add("card");
questionText.classList.add("question");
answerText.classList.add("answer");
answerText.setAttribute("hidden","");
showButton.classList.add("hide-answer");
tagList.classList.add("tag-list");
tags.classList.add("tags");

cardContainer.append(cardSection);
cardSection.append(questionText,answerText,showButton,tagList);
tagList.append(tags);

answerText.textContent=answerInput.value;
questionText.textContent=questionInput.value;
showButton.textContent="Show answer";
tags.textContent=tagInput.value;
showButton.addEventListener("click", () => {
  answerText.toggleAttribute("hidden");
});

})




