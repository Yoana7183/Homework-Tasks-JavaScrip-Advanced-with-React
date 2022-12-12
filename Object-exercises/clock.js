// Write a JavaScript program to create a Clock. Go to the editor
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"

function getData() {
    
let date = new Date
date.getMinutes()
date.getSeconds()
console.log(date)
}
setInterval(getData,1000)