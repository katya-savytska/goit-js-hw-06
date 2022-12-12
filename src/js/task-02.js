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

console.log(ingredients);

const makeList = (ingredient) => {
  const list = document.querySelector('#ingredients');
  const ingredientsEl = document.createElement('li');
  ingredientsEl.classList.add('item');
  ingredientsEl.textContent = ' ';
  console.log(ingredientsEl);
  list.append(ingredientsEl);

  return list;
};
const elements = ingredients.map(makeList);
console.log(elements);
