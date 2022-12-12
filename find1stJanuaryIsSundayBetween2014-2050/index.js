// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050

var minYear =2014;
var maxYear =2050;

for(minYear; minYear<=maxYear; minYear++){
    let isSunday = new Date (minYear, 0, 1);
    if(isSunday.getDay() === 0){
        console.log('1st January is on Sundey in those years '+ isSunday)
    }
}