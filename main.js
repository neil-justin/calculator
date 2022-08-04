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

const currentValueDiv = document.querySelector('.current-value');
const numbersBtn = document.querySelectorAll('.numbers-btn');
numbersBtn.forEach(number => {
    number.addEventListener('click', () => {
        currentValueDiv.textContent = `${number.value}`
    });
});