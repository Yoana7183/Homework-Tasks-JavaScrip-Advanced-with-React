var array = [3, 6, 2, 56, 32, 5, 88, 32, 100, 110, 120];
var highest = 0;
var secondHighest = 0;

for (i = 0; i < array.length; i++) {
    if (array[i] > highest) {
        secondHighest = highest;
        highest = array[i];
    } if (array[i] > secondHighest && array[i] != highest){
        secondHighest = array[i];
}
}
console.log(highest);
console.log(secondHighest);
console.log(secondHighest);


