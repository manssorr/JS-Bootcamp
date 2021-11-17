'use strict'
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let theGame = new Hangman('Lucy Cat', 2)


//Start the game
const startNewGame = () => {
    puzzleEl.textContent = theGame.puzzle
    guessesEl.textContent = theGame.statusMessage
}

// listener to the user keyboard pressing
window.addEventListener('keypress', function(event){
    const guess = String.fromCharCode(event.charCode)
    theGame.makeGuess(guess)
    puzzleEl.textContent = theGame.puzzle
    guessesEl.textContent = theGame.statusMessage
})

startNewGame()

getPuzzle("1", (error, puzzle) => {
    if (puzzle) {
        console.log(puzzle);
    } else if (error) {
        console.log(`Error: ${error}`);
    }
})

getCountry('EG',(error, countryName) => {
    if (countryName) {
        console.log(countryName);
    }
    else if (error) {
        console.log(`error: ${error}`);
    }
})