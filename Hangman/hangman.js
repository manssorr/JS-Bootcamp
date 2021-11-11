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
    // const hasGuess = this.remainingGuesses > 0

    if (this.remainingGuesses === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'won'
    } else {
        this.status = 'Playing'
    }

}

// Get done msg
Hangman.prototype.getStatusMessage = function () {
    if (this.status === 'failed') {
        return `Nice try! the word was ${this.word.join('')}`
    } else if (this.status === 'won') {
        return `Congratulations! You done this WORD`
    } else if (this.status === 'Playing') {
        return `Guess left: ${this.remainingGuesses}`
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

    if (this.status !== 'Playing') {
        return
    }
    if (isUnique ) {
        this.guessedLetters.push(guess)
    }
    if (isUnique && isBadGuess) {
        this.guessedLetters.push(guess)
        this.remainingGuesses--
    }
    this.updateStatus()

}