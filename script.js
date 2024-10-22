'use strict'

const log = console.log //Ease in outputting //
const userInput = document.querySelector('.userInput')

let humanScore = 0
let computerScore = 0

userInput.addEventListener('click', function (event) {
  // Check if the clicked element is a button
  if (event.target.tagName === 'BUTTON') {
    // Check which button was clicked using its class name
    if (event.target.classList.contains('rock-btn')) {
      playGame('Rock')
    } else if (event.target.classList.contains('paper-btn')) {
      playGame('Paper')
    } else if (event.target.classList.contains('scissors-btn')) {
      playGame('Scissors')
    }
  }
})

function getComputerChoice() {
  const gameOptions = [`Rock`, `Paper`, `Scissors`]
  const randomNumber = Math.floor(Math.random() * 3) //Random number between 0 & 2//
  return gameOptions[randomNumber]
}

// function getHumanChoice() {
//   const gameOptions = [`Rock`, `Paper`, `Scissors`] //To Provide a default value in the prompt box//
//   const randomNumber = Math.floor(Math.random() * 3) //Random number between 0 & 2//
//   const humanChoice = prompt(
//     `Please enter your choice(Rock, Paper or Scissors)`,
//     `${gameOptions[randomNumber]}`
//   )
//   return humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase()
// }

function playGame(humanChoice) {
  const computerSelection = getComputerChoice()
  // const humanSelection = getHumanChoice()

  function playRound(computerSelection, humanSelection) {
    const humanChoice = humanSelection.toLowerCase()
    const computerChoice = computerSelection.toLowerCase()
    if (humanChoice === computerChoice) {
      console.log(
        `It's a Draw! ${humanSelection} befriends ${computerSelection}`
      )
    } else if (computerChoice === `rock` && humanChoice === `paper`) {
      console.log(`You Win! ${humanSelection} beats ${computerSelection}`)
      humanScore += 1
    } else if (computerChoice === `scissors` && humanChoice === `rock`) {
      console.log(`You Win! ${humanSelection} beats ${computerSelection}`)
      humanScore += 1
    } else if (computerChoice === `paper` && humanChoice === `scissors`) {
      console.log(`You Win! ${humanSelection} beats ${computerSelection}`)
      humanScore += 1
    } else {
      console.log(`You Lose! ${computerSelection} beats ${humanSelection}`)
      computerScore += 1
    }
  }

  playRound(computerSelection, humanChoice)
  printResult()
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
