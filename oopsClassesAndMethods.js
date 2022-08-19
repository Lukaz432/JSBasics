module.exports = class Person 
{
    age = 25
    //calling a class property
    get location() //location = 'Canada'
    {
        return 'Canada'
    }
//constructor is a method which executes by default when youn create object of the chosen class
constructor(firstName, lastName)
{
    //values depend on the object we call which is why these are called instance variables
    this.firstName = firstName
    this.lastName = lastName
}
//methods
fullName()
{
    console.log(this.firstName+this.lastName)
}
}

// //creating an object for a class
// let person = new Person('Tim', 'Joseph')
// let person1 = new Person('John', 'Abruzzi')
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName())
// console.log(person1.fullName())