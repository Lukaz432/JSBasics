//object is a collection of properties

let person = {
    firstName:'Tim',
    lastName:'Joe',
    fullName: function()
    {
        console.log(this.firstName+this.lastName)
    }
}

console.log(person.fullName())
console.log(person.lastName)
console.log(person['lastName'])
person.firstName = 'Lukas' //assign a new value to the object's parameter
console.log(person.firstName)

person.gender = 'male' //assign a new property to the object
person.age = 28
person.employment = 'no'
person.dob = 'France'
console.log(person)
delete person.gender
console.log(person)

console.log('gender' in person) //search if parameter exists, prints False/True

//print all of the js object values
for(let key in person)
{
    console.log(person[key])
}