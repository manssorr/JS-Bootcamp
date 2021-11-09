'use strict'
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let theGame = new Hangman('Cat', 2)


//Start the game
const startNewGame = () => {
    console.log(theGame.status)
    puzzleEl.textContent = theGame.getPuzzle()
    guessesEl.textContent = `You have only ${theGame.remainingGuesses} guess left`
}

// listener to the user keyboard pressing
window.addEventListener('keypress', function(event){
    const guess = String.fromCharCode(event.charCode)
    theGame.makeGuess(guess)
    puzzleEl.textContent = theGame.getPuzzle()
    guessesEl.textContent = `You have only ${theGame.remainingGuesses} guess left`
    console.log(theGame.status)
})

startNewGame()