function add(...args) {
    return args.reduce((prev, current) => prev + current, 0);
}

function subtract(...args) {
    return args.reduce((prev, current) => prev - current);
}

function multiply(...args) {
    return args.reduce((prev, current) => prev * current);
}

function divide(...args) {
    return args.reduce((prev, current) => prev / current);
}

function operate(operator, num1, num2) { // take operator and 2 nums and return solution
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        default:
            return 'ERROR!'
            break;
    }
}

function displayNum() { // display value of clicked buttons
    displayValue += this.textContent;
    display.value = displayValue;
}

function clear() {
    displayValue = '';
    display.value = displayValue;
    currentOperator = '';
}

function getOperator() {
    currentOperator = this.textContent;
    num1 = parseFloat(displayValue);
    displayValue = '';
}

function displaySolution() {
    num2 = parseFloat(displayValue);
    console.log(`${num1} ${currentOperator} ${num2}`)
    if (!currentOperator || !num1 || !num2) {
        display.value = 'ERROR!';
        setTimeout(clear, 2000);
    } else {
        display.value = operate(currentOperator, num1, num2);
    }
}

let displayValue = '';
let currentOperator = '';
let num1, num2;
const numButtons = document.querySelectorAll('.num-btn');
const display = document.querySelector('.display');
const clearButton = document.querySelector('.clear-btn');
const opButtons = document.querySelectorAll('.op-btn');
const equalButton = document.querySelector('.equal-btn');

display.disabled = true;
numButtons.forEach((btn) => btn.addEventListener('click', displayNum));
opButtons.forEach((btn) => btn.addEventListener('click', getOperator))
clearButton.addEventListener('click', clear);
equalButton.addEventListener('click', displaySolution);

