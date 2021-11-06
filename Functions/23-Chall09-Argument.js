let getTip = function (total , tipPer = .2) {
    let per = tipPer * 100;
    let tip = total * tipPer;
    return `A ${per}% tip on $${total} would be $${tip}`;
}

let tip = getTip (100)
console.log (tip)

tip = getTip (100,.25)
console.log (tip)