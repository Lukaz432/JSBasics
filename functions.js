//block of code

function add(a,b){
    return a+b
}

let sum =add(1,2)
console.log(sum)

//do not have a name =>anonymous function
//they are called function expressions

//anonymous functions may be assigned to variables
let sumOfIntegers = function(c,d){
    return c+d
}
console.log(sumOfIntegers(10,20))

//anonymous functions may allow removal of
//function, curly braces and return
let sumOfNumbers = (e,f)=> e+f
console.log(sumOfNumbers(13,14))