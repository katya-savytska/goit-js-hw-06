/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients');
const listContentEl = ingredients
    .map((ingredient) => `<li>${ingredient}</li>`)
    .join('');

listEl.insertAdjacentHTML('beforeend', listContentEl);

