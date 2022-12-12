const array = [1, 2, 3, 4, 90, 12, 21]

let number;
let resultOfSum;
for (i = 0; i < array.length; i++) {
    number = array[i];

    if ((number % 3) == 0) {
        resultOfSum += number
        console.log(resultOfSum);
    }

    return resultOfSum
}
console.log(`resultOfSum`);