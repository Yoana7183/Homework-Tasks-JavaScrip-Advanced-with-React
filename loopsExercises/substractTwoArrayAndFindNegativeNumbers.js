
const firstArray = [5, 5, 3, -5, -5, -5];
const secondArray = [1, 1, 1, -1, -1, 1, 1, 1, -1, 1,]

function substractingNumbersFromBothArrays(firstArray, secondArray) {
    const substractedArray = []
    var element1;
    var element2;
    var substractedResult;
    var biggestArray = firstArray;

    if (biggestArray < secondArray) {
        biggestArray = secondArray
    }

    for (i = 0; i < biggestArray.length; i++) {
        element1 = firstArray[i];
        element2 = secondArray[i];
        substractedResult = element1 - element2

        substractedArray.push(substractedResult)
        
    }

    return substractedArray
};

// console.log(substractingNumbersFromBothArrays(firstArray, secondArray));

function findNegativeNumbersInArrays(array) {
    let negativeNum = 0
    const arrayWithNegativeNumbers = []
    for (i = 0; i < array.length; i++) {
        var element1 = array[i];

        if (element1 < negativeNum) {
            arrayWithNegativeNumbers.push(element1)
        }
    }

    return arrayWithNegativeNumbers.length
}

// console.log(findNegativeNumbersInArrays(firstArray));
// console.log(findNegativeNumbersInArrays(secondArray));

let result = substractingNumbersFromBothArrays(firstArray,secondArray)
console.log(result);
console.log(findNegativeNumbersInArrays(result));

function reversingOrderOfTheArray(array) {
    
    const reversedArray=[];
    let element;
    for(i=array.length-1; i>=0; i--){
    element = array[i]
    reversedArray.push(element)
    }
 
  return reversedArray
}
console.log(reversingOrderOfTheArray(result));