/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const newArr = ["start", ...numbers, "end"];

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];
// const result = [...arr3, ...arr1, ...arr2];

/* const obj1 = {
  a: 10,
  b: 20,
  c: 30,
  x: 100,
};

const obj2 = {
  t: 60,
  y: 70,
  i: 80,
  x: 200,
};

const result = { ...obj2, ...obj1 };

console.log(result); */

/* const defaultUser = {
  name: "Anonym",
  age: 0,
  phoneNumber: "00000000",
  isStudent: false,
  isAdmin: false,
  defaultColor: "white",
};
const userInfo = {
  name: "Vlad",
  age: 20,
};

const userInfo1 = {
  name: "Roman",
  age: 22,
};
const user = { ...defaultUser, ...userInfo, ...userInfo1 };
console.log(user); */

// const numbers1 = [4, 3, 2, 2, 6, 7, 1, 3, 5, 7, 3];
// const numbers2 = [23, 5, 24, 23, 345, 4, 25, 45, 34, 23];
// const numbers3 = [5, 2, 4, 5, 23, 4, 3, 45, 34, 3, 53, 46, 2];
// const max = Math.max(...numbers1, ...numbers2, ...numbers3);
// const min = Math.min(...numbers1, ...numbers2, ...numbers3);
// console.log(max);

/* const arr = [1, 2, 3];

const test = [1, 3, 1, 2, 5, 6, 2, 32, 5];

test.push(...arr);

console.log(test); */
/*
 * Пошук найменшої аьо найбільшої температури (числа)
 */
// const temps = [18, 14, 12, 21, 17, 29, 24];

/**
 * Створення масиву і тип за посиланням
 */
const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
const b = a;

// console.log("a: ", a);
// console.log("b: ", b);

/*
 * Поєднуємо кілька масивів в один через spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [];
// console.log(allTemps);

/*
 * Створення об'єкта
 */
const objA = { x: 1, y: 2 };
const objB = { x: 0, z: 3 };
const objC = {};

// console.log(objC);

/**
 * Оновлюємо налаштування користувача
 */
const defaultSettings = {
  theme: "light",
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {};

// console.log(finalSettings);

// ==========================

// REST

/* function foo(name, x, y, ...arr) {
  console.log(...arr);
}

foo(1, 2, 3, 4, 5, 6);
 */
// ==============================

// function foo(arr1, ...arr2) {
//   const result = [];

//   for (const item of arr2) {
//     if (arr1.includes(item)) {
//       result.push(item);
//     }
//   }

//   return result;
// }

// const numbers = [1, 2, 3, 4, 5];
// foo(numbers, 7, 2, 1, 2, 4, 6, 7, 8, 9, 4, 2, 1);

// ==============================

/* function sum(...items) {
  let total = 0;

  for (const item of items) {
    total += item;
  }

  console.log(total);
}

sum(1, 2, 3, 4, 1, 2, 3, 5, 6, 6, 5, 5); */
