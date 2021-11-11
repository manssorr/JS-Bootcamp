// prototype inhertance
// make a constractor person with Fname, Lname, Age, Likes arguments
class Person {
    constructor(firstName, LastName, age, likes = []){
        this.firstName = firstName
        this.LastName = LastName
        this.age = age
        this.likes = likes
    }
    // make a prototype method getBio output: Mansour is 22. 
    // Mansour like Biking. Mansour like food.
    getBio() {
        let bio = `${this.firstName} is: ${this.age} years old.`
        this.likes.forEach(like => {
            bio += ` ${this.firstName} likes ${like}.`
        });
        return bio
    }
    // make a prototype method setName with take full name then fill Fname, Lname
    setName(fullName) {
        const name = fullName.split(" ")
        this.firstName = name[0]
        this.LastName = name[1]
    }
}

class Empolyee extends Person {
    constructor(firstName, LastName, age, position, likes = []) {
        super(firstName, LastName, age, likes)
        this,position = position
    }
    getBio() {
        return `${this.firstName} ${this.LastName} is a ${this.}`
    }
    getYearsLeft(){
        return 65 - this.age
    }
}

