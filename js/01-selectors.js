/*
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */

// const elem1 = document.querySelector('.js-list>li:nth-child(1)');
// const elem2 = document.querySelector('.js-stawed');

// const elems = document.querySelectorAll('.js-list-1>li');

// console.log(elems);

// =========================

// const ulElem = document.querySelector('.js-list-1');
// console.log(ulElem);

// const liElem = ulElem.querySelector('li');
// console.log(liElem);

// =========================

// const elem1 = document.getElementById('test'); // 1
// const elem2 = document.getElementsByClassName('site-nav__item'); // []
// const elem3 = document.getElementsByName('site-nav__item'); // []
// const elem4 = document.getElementsByTagName('li'); // []

// console.log(elem2);

/*
 * Властивості «навігації» по DOM-вузлах
 */

const liElem = document.querySelector('#test1');

// console.log(
//   liElem.parentNode.parentNode.lastElementChild.lastElementChild
//     .firstElementChild,
// );

// console.dir(liElem.firstChild);
// console.dir(liElem.firstElementChild);

// console.log(liElem.lastChild);
// console.log(liElem.lastElementChild);

// console.log(liElem.previousSibling);
// console.log(liElem.previousElementSibling);

// console.log(liElem.nextSibling);
// console.log(liElem.nextElementSibling);

// console.log(liElem.parentNode.parentNode.parentNode.parentNode.parentNode);

// const children = liElem.parentNode.children;
// console.log(children);
