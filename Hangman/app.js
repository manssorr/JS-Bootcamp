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

getPuzzle('2').then((puzzle)=> {
    console.log(puzzle)
}).catch((err)=>{
    console.log(`ERROR: ${err}`)
})

getCountry('EG').then((country) => {
    console.log(country);
}).catch((err)=>{
    console.log(`ERROR: ${err}`)
})