/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

const form = document.querySelector('.js-form');
const container = document.querySelector('.js-box');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  console.log(form.elements);

  const userEmail = form.elements.email.value;
  const userPassword = form.elements.password.value;
  const userComment = form.elements.comment.value;
  const userColor = form.elements.color.value;

  const obj = {
    email: userEmail,
    password: userPassword,
    comment: userComment,
    color: userColor,
  };

  const markup = itemTemplate(obj);
  container.insertAdjacentHTML('beforeend', markup);
  form.reset();
}

function itemTemplate(item) {
  return `<div class="item" style="background-color: ${item.color};">
<h5 class="title">${item.email}</h5>
<p>${item.comment}</p>
</div>`;
}
