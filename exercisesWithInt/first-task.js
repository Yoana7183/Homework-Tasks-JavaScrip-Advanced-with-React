// Write a JavaScript program to get the difference between a given number and 13, 
// if the number is greater than 13 return double the absolute difference
function isBiggerThan13(a) {

    let num = 13;
    if(a>num){
        var result = a-num;
        result = result*2
        console.log(result);
    }else{
        console.log(`is not bigger then ${num}`);
    }
    
}
isBiggerThan13(15)