//let num;
//num = Math.floor(Math.random() * 1000);

function add(a,b) {
    // adds two numbers a and b and returns the result
    return a + b;
}

function subtract(a,b) {
    // subtracts b from a and returns the result
    return a - b;
}

function multiply(a,b) {
    // multiplies two numbers a and b and returns result
    return a * b;
}

function divide(a,b) {
    // divides a by b and returns the result
    return a / b;
}

function increment(n) {
    // increments n and returns the result
    return ++n;
}

function decrement(n) {
    // decrements n and returns the result
    return --n;
}

function makeInt(n) {
    // parses n as an integer and returns parsed integer
    // assumes base 10 and returns NaN as appropriate
    return parseInt(n, 10);
}

function preserveDecimal(n) {
    // parses n as a floating point numbe and returns parsed number)
    // returns NaN as appropriate
    return parseFloat(n);
}