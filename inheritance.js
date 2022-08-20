//Inheritance is the Main Pillar in Object oriented Programming
//one class can inheric/acquire the properties, methods of another class
//the class which inherits the properties of another class is know as subclass (derived class, child class)
//the class whose properties are inherited is know as superclass, father class

const Person = require('./oopsClassesAndMethods')
class Pet extends Person
{
    get location()
    {
        return 'BlueCross'
    }
    constructor(firstName,lastName)
    {
        //call parent class constructor
        super(firstName,lastName)
    }
}

let pet = new Pet('Tom','Whiskers')
pet.fullName()
console.log(pet.location)
