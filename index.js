const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
const findQt = document.querySelector('.question-container');

const appendQuestion = question => { 
  findQt.innerText = question.questionText;
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)   
  return new Promise(resolve => setTimeout( () => resolve(question), time))
}

function removeQuestion() {
  return new Promise(function(){
    findQt.innerHTML = ""
  })
}

function askQuestionThenRemoveQuestion(time) {
  appendQuestion(question)
  return new Promise(resolve => setTimeout( () => removeQuestion(), time))
}

function trueAndFalseButtons() { 
  trueBtn = document.querySelector(".green")
  falseBtn = document.querySelector(".red")
  return [trueBtn, falseBtn]
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(button => button.classList.toggle('hide'))
}


function displayQuestionOnClick() {
  askQuestionThenRemoveQuestion(5000)
  toggleTrueAndFalseButtons(5000)
}