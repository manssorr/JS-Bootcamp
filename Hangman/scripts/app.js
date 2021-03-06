'use strict'
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let theGame




//Start the game
const startNewGame = async () => {
    const puzzle = await getPuzzle('2')
    theGame = new Hangman(puzzle, 5)
    rander()
}

// Render the game
const rander = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = theGame.statusMessage

    theGame.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement("span")
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })

}

// Reset button setup
document.querySelector("#reset").addEventListener('click', startNewGame)

// listener to the user keyboard pressing
window.addEventListener('keypress', function(event){
    const guess = String.fromCharCode(event.charCode)
    theGame.makeGuess(guess)
    rander()
})

// Generate SPAN Dom
const generateSpanDOM = async () => {
    
}

startNewGame()

generateSpanDOM()

// getPuzzle('2').then((puzzle)=> {
//     console.log(puzzle)
// }).catch((err)=>{
//     console.log(`ERROR: ${err}`)
// })

// getCountry('SA')
//     .then((country) => console.log(country))
//     .catch((err)=> console.log(`ERROR: ${err}`))

// getLocation()
//     .then((details) => console.log(`You currently in ${details.region} ${details.city} ${details.country}.`))
//     .catch((err) => console.log(`Error: ${err}`))

// getLocation()
//     .then((location) => getCountry(location.country))
//     .then((country) => console.log(country))
//     .catch((err) => console.log(`Error: ${err}`))

// getCurrentCountry()
//     .then((country) => console.log(country))
//     .catch((err) => console.log(`Error: ${err}`))
