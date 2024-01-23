/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

/* function createPromise(delay, value, isActive) {
  console.log('Created promise', value);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isActive) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });

  return promise;
}

const amount = 50;
const interval = 100;
const promises = [];

for (let i = 0; i < amount; i++) {
  const promise = createPromise(i * interval, i + 1, Math.random() > 0.5);
  promises.push(promise);
}

console.log(promises); */

/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

// function foo() {
//   return Promise.resolve();
// }
// const result = foo();
// console.log(result);

// =========================

/* const promise = Promise.resolve([1, 3, 5, 6, 0, 1, 3, 5, 0, 1, 0, 3, 0]);

promise
  .then(arr => {
    if (arr.length > 0) {
      return arr.filter(el => el > 0);
    } else {
      return Promise.reject('Array is empty');
    }
  })
  .then(filteredArr => {
    console.log(filteredArr);
  })
  .catch(error => {
    console.log(error);
  }); */

// =========================

function createPromise(value, delay, isActive) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isActive) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });

  return promise;
}

const p1 = createPromise(
  { value: 'Promise1', initTime: Date.now() },
  3000,
  true,
);
const p2 = createPromise(
  { value: 'Promise2', initTime: Date.now() },
  1000,
  false,
);
const p3 = createPromise(
  { value: 'Promise3', initTime: Date.now() },
  4000,
  true,
);
const p4 = createPromise(
  { value: 'Promise4', initTime: Date.now() },
  500,
  false,
);

const promises = [p1, p2, p3, p4];

// const result = Promise.all(promises);
// const result = Promise.allSettled(promises);
// const result = Promise.race(promises);

/* result
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  }); */
