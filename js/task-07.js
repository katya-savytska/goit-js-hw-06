/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
const fontSizeController = document.querySelector('#font-size-control');
const changingTextSize = document.querySelector('#text');
fontSizeController.addEventListener('input', onControllerInput);
function onControllerInput(event) {
  return (changingTextSize.style.fontSize = event.currentTarget.value + 'px');
}
