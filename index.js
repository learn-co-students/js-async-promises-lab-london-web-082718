const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
const qContainer = document.getElementsByClassName('question-container')[0]

function displayQuestionOnClick() {
  goBtn = document.getElementsByClassName('waves-effect')[0]
  return goBtn.addEventListener('click', event => {
    askQuestionThenRemoveQuestion(3000);
  })
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  toggleTrueAndFalseButtons();
  return new Promise(resolve =>
    setTimeout( () => resolve(question), time)
  )
}

function removeQuestion() {
  toggleTrueAndFalseButtons();
  qContainer.innerHTML = '';
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
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

displayQuestionOnClick()




