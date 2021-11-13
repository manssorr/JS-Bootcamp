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

// Listener for the API
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', event => {
    if(event.target.readyState === 4 && event.target.status === 200) {
        const data = JSON.parse(event.target.responseText)
        console.log(data)
        console.log('All well')
    } else if (event.target.readyState === 4) {
        console.log('Done with error')
    }
})

startNewGame()
request.open('GET', 'https://puzzle.mead.io/puzzle?wordCount=1')
// request.send()