
const dom = {
    a: document.getElementById("firstNum").value,
    b: document.getElementById("secondNum").value,
    res: document.getElementById("result")
}

function sumOf(a,b) {
    a=parseInt(dom.a)
    b=parseInt(dom.b)
    dom.res.innerHTML = a+b
}

function subtract() {
    dom.res.innerHTML = dom.a - dom.b;
};

function multiply() {
    dom.res.innerHTML = dom.a * dom.b;
}

function divide() {
    if (dom.a == 0 || dom.b == 0) {
        dom.res.innerHTML = "You cannot devide by 0"
    } else {
        dom.res.innerHTML = dom.a / dom.b;
    };

}
