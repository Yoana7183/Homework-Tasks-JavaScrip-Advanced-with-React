// Write a JavaScript program to compute the absolute difference between a specified number and 19. 
// Returns triple their absolute difference if the specified number is greater than 19.


function computeAbsoluteDifference(b) {
    let a =19;
    var result;
    if(b>a){
         result = (b-a)*3
    
        return result
    }else{
         result = a-b;
        return result
    };
}
console.log(computeAbsoluteDifference(15));