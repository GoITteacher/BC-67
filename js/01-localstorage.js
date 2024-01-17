/**
 * JSON
 */

/* const obj = {
  name: 'Vasya',
  age: 20,
  isStudent: false,
};
function foo() {
  console.log(123);
}

const zip = JSON.stringify(foo);
console.log(zip); */

// const zip = '{"name":"Vasya","age":20,"isStudent":false}';

// const data = JSON.parse(zip);

// console.log(data);

/**
 * LocalStorage
 */

// const LS_KEY = 'Array of names';
// const names = ['Alice', 'Kate', 'Emma'];
// localStorage.setItem('name', 'Volodka');
// localStorage.setItem('age', '25');

/* const obj = {
  name: '123',
  age: '123',
  test: '123',
};

const zip = JSON.stringify(obj);

localStorage.setItem('user', zip); */

//серіалізація

/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

/* const data = {
  t1: 10,
  t2: [1, 2, undefined, 3, 4],
  t3: true,
  showName() {
    console.log('Hello');
  },
};

localStorage.setItem('data', JSON.stringify(data)); */

/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

/* const zip = localStorage.getItem('name');
const data = JSON.parse(zip);
console.log(data); */

/**
 * Видалення
 */

// localStorage.removeItem('age');
// localStorage.clear();

/**
 * LocalStorage не може зберігати функції
 */

console.log('Start');

/* const zip = localStorage.getItem('name');
const name = JSON.parse(zip);
console.log(name); */

// ==============

/* 
localStorage.setItem('data', JSON.stringify(data));
localStorage.setItem('data', JSON.stringify(data));
localStorage.setItem('data', JSON.stringify(data));
localStorage.setItem('data', JSON.stringify(data));
localStorage.setItem('data', JSON.stringify(data)); */

/* saveToLS('data', data);
saveToLS('data', data);
saveToLS('data', data);
saveToLS('data', data);
saveToLS('data', data);
 */

function saveToLS(key, value) {
  const zip = JSON.stringify(value);
  localStorage.setItem(key, zip);
}

function loadFromLS(key) {
  const zip = localStorage.getItem(key);
  try {
    const data = JSON.parse(zip);
    return data;
  } catch {
    return zip;
  }
}
