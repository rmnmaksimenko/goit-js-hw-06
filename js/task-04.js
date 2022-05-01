const counter = document.querySelector('#value');
const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

increment.addEventListener('click', () => {
    counterValue += 1;
    counter.textContent = counterValue;
});

decrement.addEventListener('click', () => {
    counterValue -= 1;
    counter.textContent = counterValue;
});