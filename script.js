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
      playGame('Rock') // call the playGame function with argument which button was clicked
    } else if (event.target.classList.contains('paper-btn')) {
      playGame('Paper')
    } else if (event.target.classList.contains('scissors-btn')) {
      playGame('Scissors')
    }
  }
})

// To randomly generate computer's choice
function getComputerChoice() {
  const gameOptions = [`Rock`, `Paper`, `Scissors`]
  const randomNumber = Math.floor(Math.random() * 3) //Random number between 0 & 2
  return gameOptions[randomNumber]
}

function playGame(humanChoice) {
  const computerSelection = getComputerChoice()

  function playRound(computerSelection, humanSelection) {
    const humanChoice = humanSelection.toLowerCase()
    const computerChoice = computerSelection.toLowerCase()
    if (humanChoice === computerChoice) {
      displayRoundResult.textContent = `It's a Draw! ${humanSelection} befriends ${computerSelection}`
    } else if (computerChoice === `rock` && humanChoice === `paper`) {
      displayRoundResult.textContent = `You Win! ${humanSelection} beats ${computerSelection}`
      humanScore += 1
    } else if (computerChoice === `scissors` && humanChoice === `rock`) {
      displayRoundResult.textContent = `You Win! ${humanSelection} beats ${computerSelection}`
      humanScore += 1
    } else if (computerChoice === `paper` && humanChoice === `scissors`) {
      displayRoundResult.textContent = `You Win! ${humanSelection} beats ${computerSelection}`
      humanScore += 1
    } else {
      displayRoundResult.textContent = `You Lose! ${computerSelection} beats ${humanSelection}`
      computerScore += 1
    }
  }

  playRound(computerSelection, humanChoice)
  printResult()
  humanScorecard.textContent = `Puny Human Score : ${humanScore}`
  computerScorecard.textContent = `MIGHTY COMPUTER Score : ${computerScore}`
}

// for (let counter = 1; counter < 6; counter++) {
//   playGame()
// }
function printResult() {
  if (humanScore > computerScore) {
    console.log(
      `You Win! You won ${humanScore} rounds while Computer won ${computerScore} rounds`
    )
  } else if (computerScore > humanScore) {
    console.log(
      `You Lose! You won ${humanScore} rounds while Computer won ${computerScore} rounds`
    )
  } else
    console.log(
      `It's a Draw! You won ${humanScore} rounds while Computer won ${computerScore} rounds`
    )
}
