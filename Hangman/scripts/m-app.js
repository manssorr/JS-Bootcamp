// The status of the game!
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