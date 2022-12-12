
let jacket1 = {
    color: 'blue',
    size: 32,
    price:20
}
let jacket2 = {
    color: 'white',
    size: 34,
    price:20
}
let jacket3 = {
    color: 'green',
    size: 30
}
let jacket4 = {
    color: 'black',
    size: 32
}
let jacket5 = {
    color: 'blue',
    size: 40
}
const jackets =[]
jackets.push(jacket1,jacket2,jacket3,jacket4,jacket5)

let jacketMap = new Map ()
for(let i =0; i<jackets.length;i++){
    let key = i
    let element = jackets[i]
    jacketMap.set(key,element)

}
console.log(jacketMap);
console.log(jacketMap.get(2));
let entries = jacketMap.entries()

for(let el of entries){
    console.log(el);
}