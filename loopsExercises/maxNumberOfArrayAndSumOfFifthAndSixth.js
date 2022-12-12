let arrayOfNumbers = [1, 2, 3, 4, 5, 10, 7, 8, 9, 10, 11, 12, 16]
let arrayOfUndefined = [1, undefined, undefined]
let arrayOfZeroNum = []
let arrayOfOneNum = [1]
let arrayOfBoubleNum = [1.1, 1.2, 1.3, 1.4, 4.5, 1.6, 1.7, 1.8, 1.9, 2]
let arrayOfNegativeNum = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]
let arrayOfBigNum = [100000, 2000000, 300000000, 4000000000000, 500000000000000, 600000000000000000000000000000000000000, 7, 8, 9, 10]

function findMaxNumberOfArray(arrayOfNumbers) {
    var maxNum = -Infinity;
    if (arrayOfNumbers.includes(undefined)) {
        console.log(`One of the elements in arrayOfNumbers is undefined`)
    } if (arrayOfNumbers.length === 0) {
        console.log(`The array is empty`)
    } if (arrayOfNumbers.length < 5) {
        console.log(`The array contains 5 or less element, you cannot use findMaxNumberOfArray()`)
    }

    else {
        for (i = 0; i < arrayOfNumbers.length; i++) {

            if (arrayOfNumbers[i] > maxNum) {

                maxNum = arrayOfNumbers[i]
            }
        }

    }
    return maxNum;
}
// console.log(findMaxNumberOfArray(arrayOfNumbers));
console.log(findMaxNumberOfArray(arrayOfUndefined));
console.log(findMaxNumberOfArray(arrayOfZeroNum));
console.log(findMaxNumberOfArray(arrayOfOneNum));
console.log(findMaxNumberOfArray(arrayOfBoubleNum));
console.log(findMaxNumberOfArray(arrayOfNegativeNum));
console.log(findMaxNumberOfArray(arrayOfBigNum));

function findSumOfFifthAndSixthNum(arrayOfNumbers) {
    var fifth = 0
    var sixth = 0
    var sumOfFifthAndSixth = 0;
    if (arrayOfNumbers.length < 5) {
        console.log(`The array contains 5 or less element, you cannot use findMaxNumberOfArray()`)
    } else {
        for (i = 0; i < arrayOfNumbers.length; i++) {
            fifth = arrayOfNumbers[4]
            sixth = arrayOfNumbers[5]
            sumOfFifthAndSixth = fifth + sixth
        }
    }
    return sumOfFifthAndSixth
}
console.log(findSumOfFifthAndSixthNum(arrayOfNumbers));
console.log(findSumOfFifthAndSixthNum(arrayOfOneNum));