let currentVal = 0;
let currentVal2;
const currentValDiv = document.querySelector('.current-value');
const numbersBtn = document.querySelectorAll('.numbers-btn');
numbersBtn.forEach(numberBtn => {
    numberBtn.addEventListener('click', () => {
        if (currentValDiv.innerText === '0') {
            if (storedValDiv.textContent) {
                if (currentValDiv.innerText.length > 16) {
                    numbersBtn.forEach(numberBtn => {
                        numberBtn.disabled = true;
                    });
                } else if (currentValDiv.textContent === currentVal) {
                    currentVal2 = `${numberBtn.value}`;
                    currentValDiv.textContent = currentVal2;
                } else {
                    currentVal2 += `${numberBtn.value}`;
                    currentValDiv.textContent = currentVal2;
                }
            } else if (numberBtn.value === '0') {
                currentVal = 0;
                currentValDiv.textContent = currentVal;
            } else {
                currentVal = `${numberBtn.value}`;
                currentValDiv.textContent = currentVal;
            }
        } else {
            if (storedValDiv.textContent) {
                if (currentValDiv.innerText.length > 16) {
                    numbersBtn.forEach(numberBtn => {
                        numberBtn.disabled = true;
                    });
                } else if (currentValDiv.textContent === currentVal) {
                    currentVal2 = `${numberBtn.value}`;
                    currentValDiv.textContent = currentVal2;
                } else {
                    currentVal2 += `${numberBtn.value}`;
                    currentValDiv.textContent = currentVal2;
                }
            } else if (currentValDiv.innerText.length > 16) {
                numbersBtn.forEach(numberBtn => {
                    numberBtn.disabled = true;
                });
            } else {
                currentVal += `${numberBtn.value}`;
                currentValDiv.textContent = currentVal;
            }
        }
    });
});

const storedValDiv = document.querySelector('.stored-value');

let operatorVal;
const operatorsBtn = document.querySelectorAll('.operators-btn');
operatorsBtn.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', () => {
        operatorVal = operatorBtn.value;
        storedValDiv.textContent = `${currentVal} ${operatorBtn.innerText}`;
    })
})

const equalButton = document.querySelector('.equal-btn');
equalButton.addEventListener('click', () => {
    operate(operatorVal);
})

function operate(operator) {
    switch (operator) {
        case '+':
            storedValDiv.textContent = `${currentVal} + ${currentVal2} =`;
            currentVal = add(parseInt(currentVal), parseInt(currentVal2));
            return currentValDiv.textContent = currentVal;
        case '-':
            storedValDiv.textContent = `${currentVal} - ${currentVal2} =`;
            currentVal = subtract(parseInt(currentVal), parseInt(currentVal2));
            return currentValDiv.textContent = currentVal;
        case '*':
            storedValDiv.textContent = `${currentVal} × ${currentVal2} =`;
            currentVal = multiply(parseInt(currentVal), parseInt(currentVal2));
            return currentValDiv.textContent = currentVal;
        case '/':
            storedValDiv.textContent = `${currentVal} ÷ ${currentVal2} =`;
            currentVal = divide(parseInt(currentVal), parseInt(currentVal2));
            return currentValDiv.textContent = currentVal;
    }
}

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
