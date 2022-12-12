let descriptionOfSet = "Set objects are collections of values. A value in the Set may only occur once; it is unique in the Set's collection. You can iterate through the elements of a set in insertion order. The insertion order corresponds to the order in which each element was inserted into the set by the add() method successfully (that is, there wasn't an identical element already in the set when add() was called). The specification requires sets to be implemented that, on average, provide access times that are sublinear on the number of elements in the collection. Therefore, it could be represented internally as a hash table (with O(1) lookup), a search tree (with O(log(N)) lookup), or any other data structure, as long as the complexity is better than O(N)."

let splitedDescription = descriptionOfSet.split(" ")
console.log(splitedDescription.length);

let set1 = new Set()
for(let element of splitedDescription){
    set1.add(element)
}

for(const element of set1) {
   console.log(element);
}
console.log(set1.get(2));