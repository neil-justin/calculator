function add(x, y) {
    return +x + +y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

const storedValue = document.querySelector('.stored-value');
const displayedValue = document.querySelector('.displayed-value');

let operand1 = 0;
let operand2 = 0;
const numbersBtn = document.querySelectorAll('.numbers-btn');
numbersBtn.forEach(numberBtn => {
    numberBtn.addEventListener('click', () => {
        if (displayedValue.innerText.length > 14) {
            numbersBtn.forEach(numberBtn => {
                numberBtn.disabled = true;
            });
        } else if (storedValue.textContent) {
            if (operand2 != 0) {
                if (displayedValue.textContent === '0') {
                    operand1 = `${numberBtn.value}`;
                    displayedValue.textContent = operand1;
                } else {
                    operand2 += `${numberBtn.value}`;
                    displayedValue.textContent = operand2;
                }
            } else {
                operand2 = `${numberBtn.value}`;
                displayedValue.textContent = operand2;
            }
        } else {
            if (displayedValue.textContent === '0') {
                operand1 = `${numberBtn.value}`;
                displayedValue.textContent = operand1;
            } else {
                operand1 += `${numberBtn.value}`;
                displayedValue.textContent = operand1;
            }
        }

        if (undoBtn.disabled) undoBtn.disabled = false;
    });
});

let operator;
// will be use to display the main symbol of an operator (e.g. display "÷" instead of "/" for division)
let operatorSymbol;
const operatorsBtn = document.querySelectorAll('.operators-btn');
operatorsBtn.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', () => {
        operatorSymbol = operatorBtn.innerText;
        // evaluate complex expression (e.g. 2 - 3 + 1)
        if (operand2 && (operator === operatorBtn.value ||
            operator !== operatorBtn.value)) {
            operate(operator);
            storedValue.textContent = `${operand1} ${operatorSymbol}`;
            // unexpected result will occur if this variable wasn't re-initialize
            operand2 = '';
        } else {
            storedValue.textContent = `${operand1} ${operatorSymbol}`;
        }
        /* this has to be placed anywhere below the first if/else in order for
        complex expression, that has dissimilar operator (e.g. 2 + 3 - 2), to
        get evaluated accurate */
        operator = operatorBtn.value;

        if (decimalBtn.disabled) decimalBtn.disabled = false;

        if (displayedValue.innerText.length > 14) displayedValue.textContent = '';
        numbersBtn.forEach(numberBtn => numberBtn.disabled = false);
    });
});

const equalBtn = document.querySelector('.equal-btn');
equalBtn.addEventListener('click', () => {
    if (!operand2) {
        equalBtn.disabled === true;
    } else {
        if (operand1.length > 14 && operand2.length > 14) {
            storedValue.textContent = '';
            displayedValue.textContent = 'Error';
        } else {
            storedValue.textContent = `${operand1} ${operatorSymbol} ${operand2} =`;
            operate(operator);
        }
    }
    // unexpected evaluation will occur if this variable wasn't re-initialize
    operand2 = '';
});

function operate(operator) {
    operand1 = +operand1;
    operand2 = +operand2;

    switch (operator) {
        case '+':
            operand1 = add(operand1, operand2);
            break;
        case '-':
            operand1 = subtract(operand1, operand2);
            break;
        case '*':
            operand1 = multiply(operand1, operand2);
            break;
        case '/':
            operand1 = divide(operand1, operand2);
    }

    checkDecimal(operand1);
    displayedValue.textContent = operand1;
    return operand1
}

function checkDecimal(int) {
    const intString = int + '';
    let intArray;

    if (intString.includes('.')) {
        intArray = intString.split('.');
        if (intArray[1].length > 2) {
            return operand1 = +(int.toFixed(2));
        } return int;
    } return int;
}

const decimalBtn = document.querySelector('.decimal-btn')
decimalBtn.addEventListener('click', () => {
    if (displayedValue.textContent.includes('.')) {
        decimalBtn.disabled = true;
        displayedValue.textContent = displayedValue.textContent.replace('.', '');
    } else if (displayedValue.textContent === operand1) {
        operand1 = displayedValue.textContent.concat('.');
        displayedValue.textContent = operand1;
    } else {
        operand2 = displayedValue.textContent.concat('.');
        displayedValue.textContent = operand2;
    }
});

const undoBtn = document.querySelector('.undo-btn');
undoBtn.addEventListener('click', () => {
    const storedValueOperand = storedValue.textContent.split(' ');
    // start afresh when a user tried to undo the result of an expression
    if (+storedValueOperand[0] + +storedValueOperand[2] === operand1) {
        operand1 = 0;
        operand2 = '';
        operator = '';
        displayedValue.textContent = '0';
        storedValue.textContent = '';
    } else if (displayedValue.textContent.length > 1) {
        if (operand2 === displayedValue.textContent) {
            displayedValue.textContent = displayedValue.textContent
                .substring(0, displayedValue.textContent.length - 1);

            operand2 = operand2.substring(0, operand2.length - 1);
        } else {
            displayedValue.textContent = displayedValue.textContent
                .substring(0, displayedValue.textContent.length - 1);

            operand1 = operand1.substring(0, operand1.length - 1);
        }
    } else {
        undoBtn.disabled = true;
    }
});

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
    operand1 = 0;
    operand2 = '';
    operator = '';
    displayedValue.textContent = '0';
    storedValue.textContent = '';
});