const controlsContainer = document.querySelector('#controls');

const refs = {
  createButton: controlsContainer.querySelector('[data-create]'),
  destroyButton: controlsContainer.querySelector('[data-destroy]'),
};

const boxContainer = document.querySelector('#boxes');

let boxesAmount = 1;

refs.createButton.addEventListener('click', boxesEvent);
refs.destroyButton.addEventListener('click', clearBoxes)

function createBoxes(amount) {
  let markup = '';
  for (let i = 1; i <= amount; i += 1) {
    const boxSize = 20 + i * 10;
    markup += `<div style="width: ${boxSize}px; height: ${boxSize}px; margin: 1px; background-color: ${getRandomHexColor()};"></div>`;
  }
  boxContainer.insertAdjacentHTML('beforeend', markup);
};

function clearBoxes() {
  boxContainer.innerHTML = '';
}

function boxesEvent() {
  if (controlsContainer.children[0].value) boxesAmount = controlsContainer.children[0].value;
  createBoxes(boxesAmount);
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};