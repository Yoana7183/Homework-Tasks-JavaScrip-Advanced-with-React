let firstArray = [1, 2, 3, 4, 5, 6]
let secondArray = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10]

function joinArrays(firstArray, secondArray) {
    const joinedArr = []
    var element1;
    var element2;
    var sumOfArray;
    var arraySize = firstArray.length;

    if (arraySize < secondArray.length) {
        arraySize = secondArray.length
    }

    for (i = 0; i < arraySize; i++) {
        element1 = firstArray[i]
        if (element1 === undefined) {
            element1 = 0
        }
        element2 = secondArray[i]
        if (element2 === undefined) {
            element2 = 0
        }
        sumOfArray = element2 + element1
        joinedArr.push(sumOfArray)
    }

    return joinedArr;
}





console.log(joinArrays(firstArray, secondArray))
