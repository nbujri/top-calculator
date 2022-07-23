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
