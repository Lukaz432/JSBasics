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

let newQuote = day+ 'is Funday day' //+ operator enables string storing
console.log(newQuote)
let val = newQuote.indexOf('day',5) //word 'day' starts at index 4, may search beginning at index 5
console.log(val)
//Tuesday is Funday

let count = 0
let value = newQuote.indexOf('day')
while(value!== -1)
{
    count++ //2
    value = newQuote.indexOf('day',value+1)
}
console.log(count)
