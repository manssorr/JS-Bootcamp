'use strict'
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let theGame = new Hangman('Cat', 2)


//Start the game
const startNewGame = () => {
    puzzleEl.textContent = theGame.getPuzzle()
    guessesEl.textContent = theGame.getStatusMessage()
}

// listener to the user keyboard pressing
window.addEventListener('keypress', function(event){
    const guess = String.fromCharCode(event.charCode)
    theGame.makeGuess(guess)
    puzzleEl.textContent = theGame.getPuzzle()
    guessesEl.textContent = theGame.getStatusMessage()
})

startNewGame()
