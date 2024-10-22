'use strict'

const log = console.log //Ease in outputting
const userInput = document.querySelector('.userInput') //Event delegation to check which button was clicked user input
const humanScorecard = document.querySelector('.humanScore') // To display player's score card
const computerScorecard = document.querySelector('.computerScore') //To display computer' scorecard
const displayRoundResult = document.querySelector('.roundResult') //To print the round result who beats who

let humanScore = 0
let computerScore = 0

userInput.addEventListener('click', function (event) {
  // Check if the clicked element is a button
  if (event.target.tagName === 'BUTTON') {
    // Check which button was clicked using its class name
    if (event.target.classList.contains('rock-btn')) {
      playRound('Rock') // call the playRound function with argument which button was clicked
    } else if (event.target.classList.contains('paper-btn')) {
      playRound('Paper')
    } else if (event.target.classList.contains('scissors-btn')) {
      playRound('Scissors')
    }
  }
})

// To randomly generate computer's choice
function getComputerChoice() {
  const gameOptions = [`Rock`, `Paper`, `Scissors`]
  const randomNumber = Math.floor(Math.random() * 3) //Random number between 0 & 2
  return gameOptions[randomNumber]
}

// To display the Scorecard
function setScore() {
  humanScorecard.textContent = `Puny Human Score : ${humanScore}`
  computerScorecard.textContent = `MIGHTY COMPUTER Score : ${computerScore}`
}

function resetScore() {
  humanScorecard.textContent = `Puny Human Score : 0`
  computerScorecard.textContent = `MIGHTY COMPUTER Score : 0`
  humanScore = 0
  computerScore = 0
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice()
  if (humanChoice === computerChoice) {
    displayRoundResult.textContent = `It's a Draw! ${humanChoice} befriends ${computerChoice}`
  } else if (computerChoice === `Rock` && humanChoice === `Paper`) {
    displayRoundResult.textContent = `You Win! ${humanChoice} beats ${computerChoice}`
    humanScore += 1
  } else if (computerChoice === `Scissors` && humanChoice === `Rock`) {
    displayRoundResult.textContent = `You Win! ${humanChoice} beats ${computerChoice}`
    humanScore += 1
  } else if (computerChoice === `Paper` && humanChoice === `Scissors`) {
    displayRoundResult.textContent = `You Win! ${humanChoice} beats ${computerChoice}`
    humanScore += 1
  } else {
    displayRoundResult.textContent = `You Lose! ${humanChoice} loses to ${computerChoice}`
    computerScore += 1
  }
  setScore()
  if (humanScore === 5 || computerScore === 5) {
    printResult()
  }
}

function printResult() {
  if (humanScore > computerScore) {
    displayRoundResult.textContent = `You Win! You won ${humanScore} rounds while Computer won ${computerScore} rounds`
    resetScore()
  } else if (computerScore > humanScore) {
    displayRoundResult.textContent = `You Lose! You won ${humanScore} rounds while Computer won ${computerScore} rounds`
    resetScore()
  }
}
