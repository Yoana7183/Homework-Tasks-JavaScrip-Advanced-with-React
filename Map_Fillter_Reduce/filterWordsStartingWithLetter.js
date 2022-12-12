// Make a program, which will write in the console only the words that starts with letter 't' and are longer than 2 symbols

let quote ="A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools."
var quoteArr = quote.split(" ");
var filteredQuoteArr= quoteArr.filter((e)=> e.startsWith ("t")).filter(e=> e.length >2)
console.log(filteredQuoteArr);