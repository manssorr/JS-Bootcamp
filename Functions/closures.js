const createCounter = (start) => {
    let count = start
    return {
        increament(){
            count++
        },
        decrement(){
            count--
        },
        get(){
            return count
        }
    }
}

// Add the mean func Args
const counter = createCounter(10)

counter.increament()
counter.increament()
counter.increament()
counter.decrement()
console.log(counter.get());
console.log('------------------------------------');


//Adder

const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

// This value to a at initializing
const add100 = createAdder(100)

// This value to b at calling
console.log(add100(100));
console.log('------------------------------------');



// Tipper
const tipper = (baseTipPer) => {
    return (amount) => {
        return baseTipPer * amount
    }
}

const tip15 = tipper(.15)
const tip20 = tipper(.2)
const tip25 = tipper(.25)


console.log('------------------------------------');
console.log(tip15(100));
console.log(tip20(100));
console.log(tip25(100));
console.log('------------------------------------');
