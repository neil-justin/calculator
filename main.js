function add(x, y) {
    return x + y;
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
const displayedValue = document.querySelector('.current-value');

let operand1 = 0;
let operand2;
const numbersBtn = document.querySelectorAll('.numbers-btn');
numbersBtn.forEach(numberBtn => {
    numberBtn.addEventListener('click', () => {
        if (displayedValue.innerText.length > 15) {
            numbersBtn.forEach(numberBtn => {
                numberBtn.disabled = true;
            });
        }

        if (storedValue.textContent) {
            if (operand2) {
                operand2 += `${numberBtn.value}`;
                displayedValue.textContent = operand2;
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
    });
});

let operator;
// Use to display the main symbol of an operator (e.g. display "÷" instead of "/" for division)
let operatorSymbol;
const operatorsBtn = document.querySelectorAll('.operators-btn');
operatorsBtn.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', () => {
        operatorSymbol = operatorBtn.innerText;
        // evaluate complex expression (e.g. 2 - 3 + 1)
        if (operand2 && (operator === operatorBtn.value || operator !== operatorBtn.value)) {
            operate(operator);
            storedValue.textContent = `${operand1} ${operatorSymbol}`;
            // unexpected result will occur if this variable wasn't re-initialize
            operand2 = '';
        } else {
            storedValue.textContent = `${operand1} ${operatorSymbol}`;
        }
        /* this has to be placed at the bottom of this block in order for complex expression,
            that has dissimilar operator (e.g. 2 + 3 - 2), to get evaluated correctly */
        operator = operatorBtn.value;
    });
});

const equalButton = document.querySelector('.equal-btn');
equalButton.addEventListener('click', () => {
    storedValue.textContent = `${operand1} ${operatorSymbol} ${operand2} =`;
    operate(operator);
    // unexpected evaluation will occur if this variable wasn't re-initialize
    operand2 = '';
});

function operate(operator) {
    operand1 = parseInt(operand1);
    operand2 = parseInt(operand2);
    switch (operator) {
        case '+':
            operand1 = add(operand1, operand2);
            return displayedValue.textContent = operand1;
        case '-':
            operand1 = subtract(operand1, operand2);
            return displayedValue.textContent = operand1;
        case '*':
            operand1 = multiply(operand1, operand2);
            return displayedValue.textContent = operand1;
        case '/':
            operand1 = divide(operand1, operand2);
            return displayedValue.textContent = operand1;
    }
}