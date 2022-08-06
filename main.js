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
        } else if (displayedValue.textContent === '0') {
            operand1 = `${numberBtn.value}`;
            displayedValue.textContent = operand1;
        } else if (storedValue.textContent === '') {
            operand1 += `${numberBtn.value}`;
            displayedValue.textContent = operand1;
        } else {
            if (operand2) {
                operand2 += `${numberBtn.value}`;
                displayedValue.textContent = operand2;
            } else {
                operand2 = `${numberBtn.value}`;
                displayedValue.textContent = operand2;
            }
        }
    });
});

let operator;
const operatorsBtn = document.querySelectorAll('.operators-btn');
operatorsBtn.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', () => {
        operator = operatorBtn.value;
        storedValue.textContent = `${operand1} ${operatorBtn.innerText}`;
    });
});

const equalButton = document.querySelector('.equal-btn');
equalButton.addEventListener('click', () => {
    operate(operator);
});

function operate(operator) {
    switch (operator) {
        case '+':
            storedValue.textContent = `${operand1} + ${operand2} =`;
            operand1 = add(parseInt(operand1), parseInt(operand2));
            return displayedValue.textContent = operand1;
        case '-':
            storedValue.textContent = `${operand1} - ${operand2} =`;
            operand1 = subtract(parseInt(operand1), parseInt(operand2));
            return displayedValue.textContent = operand1;
        case '*':
            storedValue.textContent = `${operand1} × ${operand2} =`;
            operand1 = multiply(parseInt(operand1), parseInt(operand2));
            return displayedValue.textContent = operand1;
        case '/':
            storedValue.textContent = `${operand1} ÷ ${operand2} =`;
            operand1 = divide(parseInt(operand1), parseInt(operand2));
            return displayedValue.textContent = operand1;
    }
}