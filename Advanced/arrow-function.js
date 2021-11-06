const people = [{
    name: 'Mansour',
    age: 21
} , {
    name: 'Ahmed',
    age: 22
} , {
    name: 'Muhammed',
    age: 31
}]

const under30 = people.filter((person) => person.age < 30)
const equal22 = people.filter((person) => person.age === 22)

console.log(under30)
console.log(equal22)

const add = () => {
    return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44))

const car = {
    color: 'Red',
    getSummary() {
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary())