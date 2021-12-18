// variable containing 5 array values
var marks = Array(5)
// declaring new object containing 5 specific array values
var marks = new Array(65,80,58,42,100)

// another way of declaring an array
var marks =[65,80,58,42,100]
console.log(marks)

// creating a sub-Array
subMarks = marks.slice(2,4)
console.log(subMarks)

// access array values, check length
console.log(marks[2]) //58
marks[2] = 11; //58 value changed to 11
console.log(marks) //[65,80,58,42,100]
console.log(marks.length) //5

// add elements to the end and to the beginning of the array, delete elements
marks.push(69,89) //adds elements to the end of the array
console.log(marks) //[65,80,58,42,100,69,89]
console.log(marks.length) //7
marks.pop() //deletes the last element from the array
console.log(marks) //[65,80,58,42,100,69]
marks.unshift(111,222,333) //adds an element to the begining of the array
console.log(marks) //[111,222,333,65,80,58,42,100,69]
console.log(marks.length) //9

console.log(marks.indexOf(100))
console.log(marks.includes(200)) //is 222 present in the array; true/false

// print out all array values
for(let i=0;i<marks.length;i++){
    console.log(marks[i])
}

// sum of all array values
var sumArray = 0;
for(let i=0;i<marks.length;i++){
    sumArray += marks[i];
    // may also use
    // sumArray = sumArray + marks[i]
}
console.log(sumArray) // total sumArray sum is displayed