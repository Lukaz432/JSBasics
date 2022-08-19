//block of code
//var - global level/functional level
var greet = 'Evening'

function add(a,b)
{
    return a+b
}

let sum =add(2,3)
console.log(sum)
console.log(greet)

//do not have name =>Anonymous function-- Function expressions

let sumOfIntegers = function(c,d)
{
    return c+d
}

let sumOfNumbers= (c,d)=> c+d