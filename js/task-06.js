const inputWindow = document.querySelector('#validation-input');

inputWindow.addEventListener('blur', event => {
    if (event.currentTarget.value.length === 6) {
        inputWindow.classList.add('valid');
        inputWindow.classList.remove('invalid');
    }
    else
    {
        inputWindow.classList.remove('valid');
        inputWindow.classList.add('invalid');
    }
});