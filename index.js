const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

const questionContainer = document.querySelector('.question-container')
const btns = document.querySelector('.true-false-list').querySelectorAll('.btn')

function askQuestion(){
  return questions[0]
}


function appendQuestion(question) {
  questionContainer.innerHTML = `${question["questionText"]}`
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise((resolve) => {
    setTimeout(function(){
      resolve(question)
    }, time)
  })
}

function removeQuestion() {
  return new Promise(function(){
    questionContainer.innerHTML = ""
  })
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons() {
  const btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
  return btns
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function(btn){
    btn.classList.toggle("hide")
    // if (btn.classList.contains('hide')) {
    //   btn.classList.remove('hide')
    // } else {
    //   btn.classList.add('hide')
    // }
  })
}

function displayQuestionOnClick() {
  let buttonEl = document.querySelector(".waves-effect.btn")
  buttonEl.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}

