// Write a JavaScript program to compute the sum of the two given integers. 
// If the two values are same, then returns triple their sum


function toComputeInt(a,b){
    
    var result;
    if(a===b){
        var result = (a+b)*3
        return result
    }else{
       var result = a+b;
        return result
    }
};

console.log(toComputeInt(2,2));