const fontSizeSlider = document.querySelector('#font-size-control');
const message = document.querySelector('#text');

fontSizeSlider.addEventListener('input', event => {
    message.style = `font-size: ${event.currentTarget.value}px`
})