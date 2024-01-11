/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

// document.addEventListener('keydown', onDocumentKeyDown);
// document.addEventListener('keypress', onDocumentKeyPress);
// document.addEventListener('keyup', onDocumentKeyUp);

function onDocumentKeyUp(e) {
  console.log(e);
  console.log('KeyUP', e.code);
}
function onDocumentKeyDown(e) {
  console.log('KeyDown', e.code);
}
function onDocumentKeyPress(e) {
  console.log('KeyPress', e.code, e.ctrlKey);

  if (e.ctrlKey && e.code === 'KeyQ') {
    alert('Hello admin');
  }
}

/**
 * Обробка комбінацій клавіш
 */
