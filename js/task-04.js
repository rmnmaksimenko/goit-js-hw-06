const counter = document.querySelector('#value');
const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

increment.addEventListener('click', () => changeCounterValue(1));

decrement.addEventListener('click', () => changeCounterValue(-1));

function changeCounterValue(number) {
    counter.textContent = counterValue += number;
}