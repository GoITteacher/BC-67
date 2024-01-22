/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const notification = document.querySelector('.js-alert');

/* setTimeout(() => {
  showNotification();
  timeoutId = setTimeout(() => {
    hideNotification();
  }, 3000);
}, 5000);

notification.addEventListener('click', () => {
  hideNotification();
  clearTimeout(timeoutId);
}); */

//==================

/* 
setInterval(() => {
  showNotification();

  timeoutId = setTimeout(() => {
    hideNotification();
  }, 1000);
}, 10000);

function showNotification() {
  console.log('Show');
  notification.classList.add('is-visible');
}

function hideNotification() {
  console.log('Hide');
  notification.classList.remove('is-visible');
}

notification.addEventListener('click', () => {
  hideNotification();
  clearTimeout(timeoutId);
}); */
