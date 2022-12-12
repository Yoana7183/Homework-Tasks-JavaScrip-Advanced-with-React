// 1. Write a JavaScript program to list the properties of a JavaScript object.

// Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
// Sample Output: name,sclass,rollno

let props = Object.getOwnPropertyNames(student);
console.log(props);

let key = Object.keys(student);
console.log(key);

// Write a JavaScript program to delete the rollno property from the following object. 
// Also print the object before or after deleting the property.
delete student.rollno

console.log(student);

// 3. Write a JavaScript program to get the length of a JavaScript object.
console.log(Object.keys(student).length)
console.log(Object.getOwnPropertyNames(student).length)