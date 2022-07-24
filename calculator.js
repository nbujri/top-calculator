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

function operate(operator, num1, num2) {
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

function displayNum() {
    displayValue += this.textContent;
    display.value = displayValue;
}

let displayValue = '';
const numButtons = document.querySelectorAll('.num-btn');
const display = document.querySelector('.display');

numButtons.forEach((btn) => btn.addEventListener('click', displayNum))
display.disabled = true