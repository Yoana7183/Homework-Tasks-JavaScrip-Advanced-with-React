let arrayOfNumbers = [1, 2, 3, 4, 5];

function sumOfArray(arrayOfNumbers) {

    let totalSumOfArrayNumbers = 0;
    for (i = 0; i < arrayOfNumbers.length; i++) {
     totalSumOfArrayNumbers += arrayOfNumbers[i];
    }
    return totalSumOfArrayNumbers

}
let totalSum = sumOfArray(arrayOfNumbers)
console.log(`Total sum is ${totalSum}`);