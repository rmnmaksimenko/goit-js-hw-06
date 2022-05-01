const ColorChangeButton = document.querySelector('.change-color');
const aboutColorText = document.querySelector('.color');

ColorChangeButton.addEventListener('click', changeColor);

function changeColor() {
  const backgroundColor = getRandomHexColor();
  aboutColorText.textContent = backgroundColor;
  document.body.style = `background-color: ${backgroundColor}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// console.log(getRandomHexColor());