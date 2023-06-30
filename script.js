const mainTitle = document.querySelector('#title');
let curValue = 0;

const btnDecrement = document.querySelector('#decrement');
const btnIncrement = document.querySelector('#increment');
const btnReset = document.querySelector('#reset');

btnIncrement.addEventListener('click', () => {
    curValue ++;
    mainTitle.textContent = curValue;
});

btnDecrement.addEventListener('click', () => {
    curValue --;
    mainTitle.textContent = curValue;
});

btnReset.addEventListener('click', () => {
    curValue = 0;
    mainTitle.textContent = curValue;
});

