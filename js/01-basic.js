/**
 * Деструктуризація об'єкта
 * Деструктуризація неіснуючих властивостей
 * Перейменування змінної
 * Значення за замовчуванням
 */

/* const user = {
  username: 'Jacob name',
  age: 12,
  isStudent: true,
  city: 'Dnipro',
  country: 'Ukraine',
  skills: {
    html: true,
    css: false,
    js: true,
  },
  location: 'test'
}; */

// const { city: userCity, country: userCountry, isAdmin } = user;
// const { city: city1, city: city2, city: city3 } = user;

// const { isAdmin = false, isStudent, location: userLocation = 'none' } = user;
// console.log(isAdmin, isStudent, userLocation);

/* 

const city1 = user.city;
const city2 = user.city;
const city3 = user.city;

*/

/**
 * Глибока деструктуризація об'єкта
 */

/* const user = {
  username: 'Jacob name',
  age: 12,
  isStudent: true,
  city: 'Dnipro',
  country: 'Ukraine',
  skills: {
    html: true,
    css: false,
    js: true,
    location: {
      x: 10,
      y: 20,
    },
  },
}; */

// const {
//   skills: { html, css, js },
// } = user;

// const {html, css, js} = user.skills;

// console.log('html', html);
// console.log('css', css);
// console.log('js', js);

/**
 * Деструктуризація масива
 * Синтаксис
 * Значення за замовчуванням
 * Часткова деструктурізація
 * Пропуск значень
 * Деструктурізація параметрів
 * Переваги
 */

// const arr = [1, 2, 3, 4, 5];
// const [x1, , x3, , x5] = arr;

// console.log(x1, x3, x5);

/* const rgb = [200, 12, 32];
const [red, green, blue] = rgb;
console.log(rgb);
console.log(red, green, blue);

const point = [10, 40];
const [x, y] = point;

console.log(point);
console.log(x, y); */

// ==================
/* const rgb = [200, 12, 32, 0.5];

const [red, green, blue, alpha = 1] = rgb;

console.log(red, green, blue, alpha); */

/* const users = [
  { name: 'Vasya', age: 10 },
  { name: 'Petya', age: 20 },
  { name: 'Kolya', age: 30 },
  { name: 'Vanya', age: 40 },
];

const [{ name: name1 }, user2, , user4, user5, user6] = users;

console.log(user1);

const user1 = {};
const user2 = {}; */

// =========================

/* let x = 55;
let y = 77;
let w = 11;
let t = 22;
let q = 44;

[x, y, q, w] = [55, 77, y, y];

const [t1, t2, t3, t4] = [10, 20, 30, 40]; */

// ===========================
/* const arr = [1, 2, 3, 4, 5, 7, 78, 8, 3, 1, 3, 4];

const [x1, x2, x3, ...myArr] = arr;

console.log(myArr); */

// ===========================

/* const book = {
  id: '123123',
  title: 'Test',
  author: 'testAuthor',
  desc: 'Book Desc',
};

const { id, desc, ...newBook } = book;

console.log(id);
console.log(newBook); */

// ===========================
