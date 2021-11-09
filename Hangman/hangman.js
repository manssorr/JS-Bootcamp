'use strict'

// The hang man class defention
const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'Playing'
}

// The status of the game!
Hangman.prototype.updateStatus = function () {
    const finished = this.word.every(letter => this.guessedLetters.includes(letter))
    const hasGuess = this.remainingGuesses > 0

    if (!hasGuess && !finished) {
        this.status = 'You are FAILED!'
    } else if (hasGuess && finished) {
        this.status = 'You are FINSISHED WOHO!'
    } else {
        this.status = 'Playing'
    }

}

// Get the word with the guessed letters
Hangman.prototype.getPuzzle = function () {
    let puzzle = []
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
    return puzzle
}

// To make a guess letter use this for take input and thro to get puzzle
Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
    if (isUnique) {
        this.guessedLetters.push(guess)
    }
    if (isUnique && isBadGuess) {
        this.guessedLetters.push(guess)
        this.remainingGuesses--
    }
    this.updateStatus()
}