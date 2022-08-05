let currentVal = 0;
const currentValDiv = document.querySelector('.current-value');
const numbersBtn = document.querySelectorAll('.numbers-btn');
numbersBtn.forEach(numberBtn => {
    numberBtn.addEventListener('click', () => {
        if (currentValDiv.innerText === '0') {
            if (numberBtn.value === '0') {
                currentVal = 0;
                currentValDiv.textContent = currentVal;
            } else {
                currentVal = `${numberBtn.value}`;
                currentValDiv.textContent = currentVal;
            }
        } else {
            if (currentValDiv.innerText.length > 16) {
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

let currentVal2;



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
