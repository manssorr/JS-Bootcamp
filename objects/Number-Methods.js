const min = 1,
    max = 5;
randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

const makeGuess = function (guess) {
    if(guess === randomNumber){
        return `Wow!! You are master`
    } else {
        return `Giva another try`
    }
}

console.log(makeGuess(1))
