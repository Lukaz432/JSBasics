// adds +1 to 0 until 0<=10
for(let k=0;k<=10;k++){
    console.log(k)
}

// while required  variable is true, print it's value, assign a new false value and print it out
let required = true
while(required){
    console.log(required)
    required = false
    console.log(required)
}

// 2 and 5
// from 1 to 10 give common multiple values of 2 and 5
for (let k=1; k<=100; k++){
    if(k%2 == 0 && k%5 == 0){
        console.log(k)
    }
}

// 2 or 5
// from 1 to 10 give common multiple values of 2 or 5
for (let k=1; k<=10;k++){
    if(k%2 == 0 || k%5 == 0){
        console.log(k)
    }
}

// 2 and 5
// from 1 to 100 give me only the first 5 common values of 2 and 5
let n = 0;
for (let k=1; k<=100; k++){
    if(k%2 == 0 && k%5 == 0){
        n++;
        if(n <=5){
            console.log(k)
        }
    }
}

//2 and 5
// from 1 to 100 give me only the first 7 common values of 2 and 5
// and break when achived
let o = 0;
for (k=1; k<=100; k++){
    if(k%2 == 0 && k%5 == 0){
        o++;
        console.log(k)
       if(o == 7){
           break
       }
    }
}