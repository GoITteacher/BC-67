/**
 * - Подія input
 * - Подія focus
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */

const inputElem = document.querySelector('.js-user-name');
inputElem.addEventListener('change', onUserNameInput);
// inputElem.addEventListener('focus', onInputFocus);

function onInputFocus() {
  inputElem.classList.remove('invalid'); //red
  inputElem.classList.remove('valid'); // green
}

function onUserNameInput(e) {
  console.log('change');
  const len = +inputElem.dataset.l; // 6
  const value = inputElem.value; // '123456'

  if (value.length >= len) {
    inputElem.classList.add('valid'); // green
    inputElem.classList.remove('invalid'); //red
  } else {
    inputElem.classList.remove('valid'); // green
    inputElem.classList.add('invalid'); //red
  }
}

/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */

// inputElem.addEventListener('focus', onInputFocus);
// function onInputFocus(e) {
//   console.log('FOCUS');
// }

// inputElem.addEventListener('blur', onInputBlur);

// function onInputBlur(e) {
//   const name = inputElem.value;
//   console.log(`Hello ${name}`);
// }

// ================================

// const checkboxElem = document.querySelector('.js-check');

// checkboxElem.addEventListener('change', onInputChange);

// function onInputChange(e) {
//   console.log(checkboxElem.checked);
// }
