// Write a Bubble Sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm 
// that works by repeatedly stepping through the list to be sorted
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]

let arr = [6,4,0, 3,-2,1];

function bubbleSort(array) {
    
    for(i=0; i< array.length; i++){
        // console.log(array[i]);

for(j = 0; j< (array.length-i); j++){

    if(array[j]> array[j+1]){
        var temp = array[j]
        array[j] = array[j+1];
        array[j+1] = temp
        
    }
    console.log(array);
}
  
}
}
bubbleSort(arr);