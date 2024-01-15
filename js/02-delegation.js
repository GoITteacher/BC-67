/**
 * Додавання прослуховувача подій на кожен елемент
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

const container = document.querySelector('.container');

container.addEventListener('click', e => {
  //   if (e.target === e.currentTarget) return;
  //   if (!e.target.classList.contains('js-btn')) return;
  //   console.log(e.target.nodeName);
  if (e.target.nodeName !== 'BUTTON') return;

  const liElem = e.target.closest('div.box');

  console.log(liElem);
});

/**
 *
 * Дегегування подій
 *
 * Отримай колір квадратика по якому було здійснено клік
 */
