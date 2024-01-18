import { Message } from './message';
import * as basiclightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

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

  e.target.reset();
}

refs.container.addEventListener('click', e => {
  const isBtn = e.target.dataset.type === 'show';
  if (!isBtn) return;

  const pElem = e.target.previousElementSibling.firstElementChild;
  const message = pElem.textContent.trim();

  const modal = basiclightbox.create(`
    <div class="modalka">
      <p>${message}</p>
    </div>
  `);

  modal.show();
});
