var array = ['apple', 'pineapple', 'orange', 'strawberry', 'juice', 'water', 'coca-cola', 'burger', 'sandwich', 'cake',];


var mathRandomNumberFrom = Math.floor(Math.random() * 11);


var mathRandomNumberTo = Math.floor(Math.random() * 11);

document.writeln('NUMBER FROM' +'      '+ mathRandomNumberFrom +'<br>');

document.writeln('NUMBER TO'+'      ' + mathRandomNumberTo +'<br>');

var mathRandomNumberResult = mathRandomNumberFrom - mathRandomNumberTo;
document.writeln('RESULT FROM - TO: '+'      ' + mathRandomNumberResult +'<br>');


for (mathRandomNumberFrom; mathRandomNumberFrom > mathRandomNumberTo; mathRandomNumberTo++ ) {

document.writeln('ARRAY FROM - TO INDEX: '+'      '+ array[mathRandomNumberTo] +'<br>');
}





