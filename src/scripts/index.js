import { Message } from './message';

const refs = {
  form: document.querySelector('.js-form'),
  container: document.querySelector('.js-messages'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const username = e.target.elements.username.value;
  const email = e.target.elements.email.value;
  const message = e.target.elements.message.value;

  const obj = new Message(username, email, message);

  refs.container.insertAdjacentHTML('afterbegin', obj.toString());
}
