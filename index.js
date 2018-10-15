const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
// 1 - find the Question Container 
const qContainer = document.getElementsByClassName('question-container')[0]
// work in order of the tests / instructions
function appendQuestion(question) { 
  // this question needs to get added as innerHTML to the question Container
  qContainer.innerHTML = questions[0].questionText
} 

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)   
  toggleTrueAndFalseButtons()
  // makes question visible on page
  // want a promise to be returned relating to the True / False buttons
  return new Promise(resolve =>
    setTimeout( () => resolve(question), time)
  )
}

function removeQuestion() {
  qContainer.innerHTML = ''
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
  // needs finishin
}

function trueAndFalseButtons() { 
  greenTrue = document.querySelector(".green")
  redFalse = document.querySelector(".red")
  return [greenTrue, redFalse]
}

function toggleTrueAndFalseButtons() {
  buttons = trueAndFalseButtons()
  // console.log(buttons)
  buttons[0].classList.toggle("hide")
  buttons[1].classList.toggle("hide")
}

// 2 -reveal the question once user clicks on 'Ask Away!' button - already built in 

function displayQuestionOnClick()  {
  const askAway = document.querySelector('.waves-effect')
  askAway.addEventListener("click", e => {
    console.log("hello")
    askQuestionThenRemoveQuestion(3000).then(toggleTrueAndFalseButtons)
  })
}

