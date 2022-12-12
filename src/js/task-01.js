/* eslint-disable linebreak-style */
const categoryList = document.querySelectorAll('li.item');
console.log(categoryList);
const numbOfEl = categoryList.length;
console.log('Number of categories:', numbOfEl);

const categoryTitleEl = document.querySelector('h2');
const categoryTitle = categoryTitleEl.textContent;
console.log('Category: ', categoryTitle);


