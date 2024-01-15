/*
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const innerChild = document.querySelector('#inner-child');

innerChild.addEventListener('click', e => {
  console.log('hello1', e.currentTarget, e.target);
});

innerChild.addEventListener('click', e => {
  e.stopImmediatePropagation();
  console.log('hello2', e.currentTarget, e.target);
});

innerChild.addEventListener('click', e => {
  console.log('hello3', e.currentTarget, e.target);
});

child.addEventListener('click', e => {
  console.log(e.currentTarget, e.target);
});

parent.addEventListener('click', e => {
  console.log(e.currentTarget, e.target);
});
