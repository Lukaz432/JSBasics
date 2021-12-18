// variable containing 5 array values
var marks = Array(5)
// declaring new object containing 5 specific array values
var marks = new Array(65,80,58,42,100)

// another way of declaring an array
var marks =[65,80,58,42,100]
console.log(marks)

// accesing values
console.log(marks[2]) //58
marks[2] = 11; //58 value changed in to 11
console.log(marks) //[65,80,58,42,100]
console.log(marks.length) //5

marks.push(69,89) //adds elements to the end of the array
console.log(marks) //[65,80,58,42,100,69,89]
console.log(marks.length) //7
marks.pop() //deletes the last element from the array
console.log(marks) //[65,80,58,42,100,69]
marks.unshift(111,222,333) //adds an element to the begining of the array
console.log(marks) //[111,222,333,65,80,58,42,100,69]
console.log(marks.length) //9