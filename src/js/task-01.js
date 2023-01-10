/* eslint-disable linebreak-style */
const listEl = document.querySelector('#categories');
console.log('Number of categories:', listEl.children.length);
// eslint-disable-next-line linebreak-style
const ListItemEl = document.querySelectorAll('.item');
for (const item of ListItemEl) {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.lastElementChild.children.length);
}
