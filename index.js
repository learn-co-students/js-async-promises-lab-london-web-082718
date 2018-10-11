const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
const qContainer = document.getElementsByClassName('question-container')[0]

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise(resolve =>
    setTimeout( () => resolve(question), time)
  )
}

function removeQuestion() {
  qContainer.innerHTML = ''
}

function askQuestionThenRemoveQuestion(time) {
  appendQuestion(question)
  return new Promise(resolve =>
    setTimeout(() => removeQuestion, time)
  )
}

function trueAndFalseButtons() {
  green = document.getElementsByClassName('green')[0]
  red = document.getElementsByClassName('red')[0]
  return [green, red]
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(button => button.classList.toggle('hide'))
}

function appendQuestion(question) {
  qContainer.innerHTML = question.questionText
}

function displayQuestionOnClick() {
  askQuestionThenRemoveQuestion(3000)
  toggleTrueAndFalseButtons()
}

goBtn = document.getElementsByClassName('waves-effect')[0]
goBtn.addEventListener('click', displayQuestionOnClick)

