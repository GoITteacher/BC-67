/**
 * Створи картки з товарами на основі масиву products,
 * приклад картки https://prnt.sc/KmgDlzqOIA3M
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт,
 * приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox
 */

const products = [
  {
    id: 'aefgsfgjaygwd',
    img: 'https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG',
    name: 'Monitor',
    price: 3000,
    description: '23-inch monitor with Full HD resolution.',
  },
  {
    id: 'djgdyugejya',
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX',
    name: 'Laptop',
    price: 20000,
    description:
      'Lightweight and powerful laptop with a 15-inch display and SSD.',
  },
  {
    id: 'dthjgifgisrwe',
    img: 'https://cdn.27.ua/799/66/39/6841913_1.jpeg',
    name: 'Smartphone',
    price: 8000,
    description: 'Equipped with a triple camera and a multi-core processor.',
  },
  {
    id: 'dfhjklgylirjee',
    img: 'https://cdn.27.ua/799/b6/16/4371990_1.jpeg',
    name: 'Tablet',
    price: 12000,
    description: '10-inch tablet with high performance and a Retina display.',
  },
];

const container = document.querySelector('.products');
const backdrop = document.querySelector('.js-backdrop');
const modal = document.querySelector('.js-modal');

container.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;

  const liElem = e.target.closest('li');
  const id = liElem.dataset.id;
  const product = products.find(el => el.id === id);

  const modalMarkup = modalTemplate(product);
  modal.innerHTML = modalMarkup;

  showModal();
});

backdrop.addEventListener('click', e => {
  if (e.target.classList.contains('backdrop')) {
    hideModal();
  }
});

// ================================================
function showModal() {
  document.body.classList.add('show-modal');
}

function hideModal() {
  document.body.classList.remove('show-modal');
}

// =================== INIT ========================
function productsTemplate() {
  return products
    .map(product => {
      return ` <li class="item" data-id=${product.id}>
    <img
      src="${product.img}"
      alt="${product.name}"
    />
    <h2>${product.name}</h2>
    <p>Ціна: ${product.price}</p>
  </li>`;
    })
    .join('\n');
}

function modalTemplate(obj) {
  return ` <img
  src="${obj.img}"
  alt=""
/>
<h3>${obj.name}</h3>
<p>Price: ${obj.price}</p>
<p>${obj.description}</p>`;
}

const markup = productsTemplate();
container.innerHTML = markup;
