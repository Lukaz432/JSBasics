let day = 'Tuesday '
console.log(day.length) //8
let subDay = day.slice(0,4) //Tues
console.log(subDay)
console.log(day[0]) //T
//Tue day
let splitDay = day.split('s')
console.log(splitDay)
splitDay[1].length
console.log(splitDay[1].length) //pre-empty space trim
console.log(splitDay[1].trim().length) //post-empty space trim

let date = '23'
let nextDate = '27'
let dateDiff = parseInt(nextDate) - parseInt(date) //convert strings into ints to compare their numeric values
console.log(dateDiff)
dateDiff.toString() //convert int back to string