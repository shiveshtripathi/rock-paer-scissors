'use strict'

const log = console.log //Ease in outputting //

let humanScore = 0
let computerScore = 0

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

function playGame() {
  const computerSelection = getComputerChoice()
  const humanSelection = getHumanChoice()

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

  playRound(computerSelection, humanSelection)
}

for (let counter = 1; counter < 6; counter++) {
  playGame()
}

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
