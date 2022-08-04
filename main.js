const currentValDiv = document.querySelector('.current-value');
const currentVal = parseInt(currentValDiv);
const numbersBtn = document.querySelectorAll('.numbers-btn');
numbersBtn.forEach(numberBtn => {
    numberBtn.addEventListener('click', () => {
        if (currentValDiv.innerText === '0') {
            if (numberBtn.value === '0') {
                currentValDiv.textContent = 0;
            } else {
                currentValDiv.textContent = `${numberBtn.value}`;
            }
        } else {
            if (currentValDiv.innerText.length > 16) {
                numbersBtn.forEach(numberBtn => {
                    numberBtn.disabled = true;
                });
            } else {
                currentValDiv.textContent += `${numberBtn.value}`;
            }
        }
    });
});

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
