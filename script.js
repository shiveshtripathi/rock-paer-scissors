'use strict'

const log = console.log //Ease in outputting //

function getComputerChoice() {
  const gameOptions = [`Rock`, `Paper`, `Scissors`]
  const randomNumber = Math.floor(Math.random() * 3) //Random number between 0 & 2//
  log(
    `The Random Number is ${randomNumber} and the Computer choice is ${gameOptions[randomNumber]}`
  )
  return gameOptions[randomNumber]
}

function getHumanChoice() {
  const gameOptions = [`Rock`, `Paper`, `Scissors`] //To Provide a default value in the prompt box//
  const randomNumber = Math.floor(Math.random() * 3) //Random number between 0 & 2//
  const humanChoice = prompt(
    `Please enter your choice(Rock, Paper or Scissors)`,
    `${gameOptions[randomNumber]}`
  )
  log(
    `The Random Number is ${randomNumber} and the Human choice is ${humanChoice}`
  )
}
const computerChoice = getComputerChoice()
const humanChoice = getHumanChoice()
