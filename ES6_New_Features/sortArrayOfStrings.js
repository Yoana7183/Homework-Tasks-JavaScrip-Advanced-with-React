// Given is an array of users: users = ["Maria", "Ada", "Ivan"];
// Task: write the code which will create a NEW ARRAY (i.e. do not change the users array), with alphabetically sorted 
// (in ascending order) elements of users array.

users = ["Maria", "Ada", "Ivan"];

/* -------------------------- YOUR CODE STARTS HERE ------------------------- */
var usersSortedAlphabetically =  users.map(e=>e).sort()
/* --------------------------- YOUR CODE ENDS HERE -------------------------- */

// TEST CASE (do not modify):
console.log(`users:\n\t${users}\n`);
console.log(`usersSortedAlphabetically: \n\t${usersSortedAlphabetically}`);

/* -------------------------------------------------------------------------- */
/*                              EXPECTED OUTPUT:                              */
/* -------------------------------------------------------------------------- */
// users:
//  Maria,Ada,Ivan
//
// usersSortedAlphabetically:
//  Ada,Ivan,Maria