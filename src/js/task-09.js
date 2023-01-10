/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');

const btnColor = document.querySelector('.change-color');
console.log(btnColor);
btnColor.addEventListener('click', changeColor);

const spanColor = document.querySelector('.color');
console.log(spanColor);

function changeColor() {
  const color = getRandomHexColor();
  spanColor.textContent = color;
  bodyEl.style.backgroundColor = color;
}
