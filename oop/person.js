// prototype inhertance
// make a constractor person with Fname, Lname, Age, Likes arguments
const Person = function (firstName, LastName, age, likes = []) {
    this.firstName = firstName
    this.LastName = LastName
    this.age = age
    this.likes = likes
}

// make a prototype method getBio output: Mansour is 22. Mansour like Biking. Mansour like food.
Person.prototype.getBio = function () {
    let bio = `${this.firstName} is: ${this.age} years old.`
    this.likes.forEach(like => {
        bio += ` ${this.firstName} likes ${like}.`
    });
    return bio
}

// make a prototype method setName with take full name then fill Fname, Lname
Person.prototype.setName = function(fullName) {
    const name = fullName.split(" ")
    this.firstName = name[0]
    this.LastName = name[1]
}
//test on me, and person
Mansour = new Person('name', 'name', 14, ['draawing','eatting'])
Mansour.setName('Mariem Ashraf')
console.log(Mansour.getBio())

Adam = new Person('name', 'name', 22, ['coding','reading'])
Adam.setName('Mansour Koura')
console.log(Adam.getBio())
