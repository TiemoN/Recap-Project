const questionCounter=document.querySelector('[data-js="question-counter"]');
const questionInput=document.querySelector('[data-js="question-input"]');
const answerCounter=document.querySelector('[data-js="answer-counter"]');
const answerInput=document.querySelector('[data-js="answer-input"]');

questionInput.addEventListener("input" ,()=>{
    const maxLength = 150;
    const currentLength = questionInput.value.length;
    const charactersLeft = subtract(maxLength,currentLength);
    questionCounter.textContent=`${charactersLeft} Characters left`;
})
answerInput.addEventListener("input" ,()=>{
    const maxLength = 150;
    const currentLength = answerInput.value.length;
    const charactersLeft = subtract(maxLength,currentLength);
    answerCounter.textContent=`${charactersLeft} Characters left`;
})

function subtract(a,b) {
     return a - b;

}
