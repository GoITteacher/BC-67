/**
 * Подія сlick
 *
 * Натискаючи на кнопку "Click me" змусь
 * червоний квадратик зміщуватись на 50px по діагоналі
 */

// const clickMe3 = document.querySelector('.js-click-3');

// clickMe3.addEventListener('click', onBtnClick1);
// clickMe3.addEventListener('click', onBtnClick2);

// function onBtnClick1() {
//   console.log('Hello');
// }

// function onBtnClick2() {
//   console.log('World');
// }

/* 
    handleObjEvent - handleButtonMouseMove
    objEventHandler - buttonEventHandler
    onObjEvent - onBtnEvent
*/

// ========================

const box = document.querySelector('.js-box');
box.style.backgroundColor = 'red';
box.style.width = '100px';
box.style.height = '100px';
box.style.position = 'absolute';

const btnElem1 = document.querySelector('.js-click-1');
const btnElem2 = document.querySelector('.js-click-2');
const btnElem3 = document.querySelector('.js-click-3');

/* 
btnElem2.addEventListener('click', (e) => {
  console.log('Add listener');
  btnElem1.addEventListener('click', onBtn1Click);
});

btnElem3.addEventListener('click', (e) => {
  console.log('Remove listener');
  btnElem1.removeEventListener('click', onBtn1Click);
});

let x = 110;
let y = 110;

function onBtn1Click() {
  x += 10;
  y += 10;
  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
} */

// function foo1() {
//   console.log(1);
// }

// btnElem1.addEventListener('click', foo1);
// btnElem1.addEventListener('click', foo1);
// btnElem1.addEventListener('click', foo1);
// btnElem1.addEventListener('click', foo1);
// btnElem1.addEventListener('click', foo1);
// btnElem1.addEventListener('click', foo1);
// btnElem1.addEventListener('click', foo1);
// btnElem1.addEventListener('click', foo1);

// btnElem1.removeEventListener('click', foo1);

// btnElem1.addEventListener('click', onBtnClick);

// function onBtnClick(e) {
//   console.log(e.x, e.y);
// }
