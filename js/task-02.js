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
listEl.append(
    ...ingredients.map((item) => {
      const listContentEl = document.createElement('li');
      listContentEl.textContent = item;
      return listContentEl;
    }),
);

listEl.insertAdjacentHTML('beforeend', listContentEl);

