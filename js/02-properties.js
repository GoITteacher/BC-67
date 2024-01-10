/*
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

// const imageEl = document.querySelector('.hero__image');
// const result = imageEl.getAttribute('width');

// imageEl.setAttribute('test', 'HELLO');
// imageEl.setAttribute('height', '200');
// imageEl.removeAttribute('width');
// imageEl.removeAttribute('alt');
// imageEl.removeAttribute('src');

// console.log(imageEl);
// ===================================================
// const images = document.querySelectorAll('img');

// for (const image of images) {
//   const id = image.dataset.id; // 3
//   const url = `https://source.unsplash.com/500x500/?random=${id}&eat,bread,dish,meet,egg`;

//   image.setAttribute('src', url);
// }
// ===================================================

/*
 * Data-атрибути
 */

// const imageEl = document.querySelector('.hero__image');

// console.log(imageEl);
// console.log(imageEl.dataset.id);
// console.log(imageEl.dataset.src);

// imageEl.dataset.alt = 'Hello';
// imageEl.dataset['alt'] = 'test';

// const actions = document.querySelectorAll('.actions button');

// ===================================================

// const btn1 = document.querySelector('[data-action="ACTIVE"]');
// const btn2 = document.querySelector('[data-action="ACTIVE"]');
// const btn3 = document.querySelector('[data-action="DISABLED"]');

// btn1.addEventListener('click', () => {
//   const url =
//     'https://source.unsplash.com/500x500/?random=1&eat,bread,dish,meet,egg';
//   imageEl.setAttribute('src', url);
// });

// btn3.addEventListener('click', () => {
//   btn1.setAttribute('disabled', '');
// });
// btn2.addEventListener('click', () => {
//   btn1.removeAttribute('disabled');
// });

// console.log(imageEl.hasAttribute('isActive'));
// if (imageEl.hasAttribute('isActive')) {
//   console.log('Hello');
// }

// ===================================================
// const heroTitleEl = document.querySelector('.hero__title');
// console.log(heroTitleEl);
// console.log(heroTitleEl.textContent);
// heroTitleEl.textContent = 'HELLO WORLD';

// const boxElem = document.querySelector('.js-box');
// console.log(boxElem.textContent);
// boxElem.textContent = '<li></li>';

// ========
