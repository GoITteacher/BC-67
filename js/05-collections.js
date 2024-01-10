/*
 * Створюємо та додаємо колекцію
 */
const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

/*
 * Пишемо функцію для створення розмітки колорпікера
 */

function colorsTemplate() {
  const markup = options
    .map(el => {
      return `<div class="color-picker__option">
  <div class="box" style="background-color: ${el.color}"></div>
  <p>${el.label}</p>
</div>`;
    })
    .join('\n\n');

  return markup;
}

// const markupHTML = colorsTemplate();
// colorPickerContainerEl.innerHTML = markupHTML; // очистити або замінити

colorPickerContainerEl.insertAdjacentHTML('afterbegin', markupHTML);

// for (let color of options) {
//   const markup = `<li>${color.color}</li>`;
//   colorPickerContainerEl.insertAdjacentHTML('afterbegin', markup);
// }
