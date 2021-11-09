let word = 'cat'
let wordSplited = word.split('')
let guestWord = 'bdefghijkl mnopqrstuvwxyz'
let guestWordSplited = guestWord.split('')
let index   
let result = []
for (let i = 0; i < wordSplited.length; i++) {
    result.push('*')
}
console.log(wordSplited)
console.log(guestWordSplited)
console.log(result)
guestWordSplited.forEach ((letter) => {
    index = wordSplited.indexOf(letter)
    if (index > -1) {
        result[index] = letter
    } else if (index === -1 && result.length < wordSplited.length) {
        result.push('*')
    }
})
console.log(result)






// wordSplited.forEach(
//     function findLetter(letter) {
//         guestWordSplited.forEach(
//             function (gLetter) {
//                 if (letter === gLetter)
//                 result.indexOf(letter)
//             })
            
// })