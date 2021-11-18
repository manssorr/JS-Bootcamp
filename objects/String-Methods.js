
const isValidPassLong = function (pass) {
    if (!pass.includes('password') && pass.length > 8) {
        return `Valid password`
    } else {
        return `Invalid password`
    }
}
const isValidPassShort = function (pass) {
    return !pass.includes('password') && pass.length > 8
}

console.log(isValidPassLong('asfdfg'))
console.log(isValidPassLong('asfdfg12!#!!#'))
console.log(isValidPassLong('asfdfgpasswordkljkb2781^%*'))

console.log(isValidPassShort('asfdfg'))
console.log(isValidPassShort('asfdfg12!#!!#'))
console.log(isValidPassShort('asfdfgpasswordkljkb2781^%*'))