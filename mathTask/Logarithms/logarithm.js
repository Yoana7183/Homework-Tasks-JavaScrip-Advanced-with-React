function findXvalueOfLogarithm(a, logAx) {

    var x;

    x = a ** logAx;

    return x

}

console.log(` Logarithmic number 'x' :  ${findXvalueOfLogarithm(7, 2)}`);


function findLogAxvalueofLogarithm(a, x) {

    logAx = Math.log(x) / Math.log(a);
    logAx = logAx.toFixed(2);
    return logAx

}

console.log(` Logarithmic 'a'from 'x' :  ${findLogAxvalueofLogarithm(2, 100)}`);
// document.getElementById('calc').addEventListener('click', findXvalueOfLogarithm);


