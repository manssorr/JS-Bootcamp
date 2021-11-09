'use strict'

// The hang man class defention
const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'Playing'
}

Hangman.prototype.updateStatus = function () {
    let check = []
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            check += letter
        }
    })

    if (this.remainingGuesses <= 0) {
        this.status = 'You are FAILED!'
    } else if (check.length === this.word.length) {
        this.status = 'You are FINSISHED WOHO!'
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