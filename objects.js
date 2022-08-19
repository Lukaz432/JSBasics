//object is a collection of properties

let person = {
    firstName:'Tim',
    lastName:'Joe'
}

console.log(person.lastName)
console.log(person['lastName'])
person.firstName = 'Lukas' //assign a new value to the object's parameter
console.log(person.firstName)

person.gender = 'male' //assign a new property to the object
console.log(person)
delete person.gender
console.log(person)
