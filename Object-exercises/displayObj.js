// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

const val = Object.values(library)
console.log(val);

for(let key in library){
    console.log( library[key]);
}

let objEntries = Object.entries(library);
console.log(objEntries);