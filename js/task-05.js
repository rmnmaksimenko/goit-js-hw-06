const textInput = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  event.currentTarget.value ? (userName.textContent = event.currentTarget.value) : (userName.textContent = 'Anonymous');
});
