/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

/* const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const random = Math.random();
    if (random > 0.5) {
      resolve(100);
    } else {
      reject('Sorry');
    }
  }, 100);
}); */

/* p1.then(value => {
  console.log('Ok!', value);
})
  .catch(value => {
    console.log('Error!', value);
  })
  .finally(() => {
    alert('The end!');
  });

try {
  console.log('awdawdawd');
} catch {} */

// "Проміс виконався успішно, із результатом (виконаний, fulfilled)";
// "Проміс виконався з помилкою (відхилений, rejected)"

/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

/* const p1 = new Promise((resolve, reject) => {
  reject(10);
});

const result = p1
  .then(() => {
    console.log('filter');
  })
  .then(() => {
    console.log('map');
  })
  .then(() => {
    console.log('sort');
  })
  .then(() => {
    console.log('html');
  })
  .catch(() => {
    console.log('empty html');
  });

console.log(result); */
