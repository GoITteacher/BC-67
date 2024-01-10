/*
 * Інтерфейс classList
 * - add
 * - remove
 * - toggle
 * - replace
 * - contains
 */

// const liElems = document.querySelectorAll('ul>li');

// for (let i = 0; i < liElems.length; i += 1) {
//   if (i % 3 === 0) {
//     liElems[i].classList.add('second-link');
//   } else {
//     liElems[i].classList.add('active-link');
//   }
// }

// ===================
const btn = document.querySelector('button');
const liElem = document.querySelector('li');

btn.addEventListener('click', onClick);

function onClick() {
  // liElem.classList.add('active-link', 'second-link');
  // liElem.classList.remove('active-link', 'second-link');
  // liElem.classList.replace('test', 'second-link');
  // liElem.classList.toggle('active-link');
  // liElem.classList.contains('')// false true;
  // if (liElem.classList.contains('active-link')) {
  //   console.log('HELLO WORLD');
  // }
}
