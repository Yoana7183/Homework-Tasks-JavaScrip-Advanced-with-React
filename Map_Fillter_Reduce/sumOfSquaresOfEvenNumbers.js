
// Given is the next array of numbers: [1,2,3,4,5,6,7,8,9,10]
// Write a program which will output in the console the sum of the squares of even numbers
// expected output: 220

let arr = [1,2,3,4,5,6,7,8,9,10];

var sumOfsquaresOfEvenNumber = arr
.filter(e=> e%2==0)
.map(e=> e**2)
.reduce(
    (acc,curr)=>{return acc+curr}

);

console.log(sumOfsquaresOfEvenNumber);