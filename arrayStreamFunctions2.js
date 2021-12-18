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
var sum = 0;
for(let i=0;i<marks.length;i++){
    sum = sum + marks[i]
    // may also use
    //sum += marks[i];
}
console.log(sum) // total array sum

//reduce is used when array values may change
let total = marks.reduce((sum,mark)=>sum+mark, 0)
console.log(total);

// create a new array with even numbers of scores and multiply each value by 2 [22,48,60,80]
scores = [22,57,48,91,60,41,80,77]

var evenScores =[];
for(let i=0; i<scores.length; i++){
    if(scores[i] %2 == 0){
        evenScores.push(scores[i])
    }
}
// filter is used when array values do not change
console.log(evenScores)
let newFilterEvenScores = scores.filter(score=>score%2 == 0)
console.log(newFilterEvenScores) //[ 22, 48, 60, 80 ]

// print uneven numbers

var unevenScores =[]
for (let i=0; i<scores.length; i++){
    if(scores[i] %2 == 1){
        unevenScores.push(scores[i])
    }
}
console.log(unevenScores)
let newFilterUnevenScores = scores.filter(score=>score%2 == 1)
console.log(newFilterEvenScores) //[ 57, 91, 41, 77 ]=>[114,182,82,154]

// create a new array with even numbers of scores and
// multiply each value by 2 [22,48,60,80]
// and sum them

// map modifies array values in to new values
let mappedArray = newFilterEvenScores.map(score=>score*2)
console.log(mappedArray)

// reduce subtracts all numbers in array

let totalValue = mappedArray.reduce((sum,val)=>sum+val,0)
console.log(totalValue)

// new array

var scores2 = [22,57,48,91,60,41,80,77]

// filter, map and reduce in one line

let sumValue = scores2.filter(score=>score %2 == 0).map(score=>score *2).reduce((sum,val)=>sum + val, 0)
console.log(sumValue)