/**
 * Напиши цикл for, який виводить у консоль браузера
 * числа за зростанням від a до b, але тільки якщо число кратне 5.
 */

/* const a = 7;
const b = 55;

for (let i = a; i <= b; i += 1) {
  if (i % 8 === 0) {
    console.log(i);
  }
} */

/*
 * Напиши скрипт, який підраховує суму всіх парних чисел,
 * які входять в діапазон чисел у змінних від min до max.
 * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому два парних числа - 2 і 4, їх сума 6.
 */

/* const min = 0;
const max = 5;
let total = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 === 0) {
    total += i;
  }
}

console.log(total); */

// ============

/* const min = 0;
const max = 10;
const power = 2;

for (let i = min; i <= max; i++) {
  console.log(`${i}^${power} = ${i ** power}`);
} */

// ==============
/* const num = 2;

for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${num} = ${i * num}`);
} */

// for (let i = 1; i < 50; i++) {
//   if (i % 5 === 0 && i % 9 === 0) {
//     console.log("Знайшов", i);
//     continue;
//   }

//   console.log("Шукаємо");
// }

// console.log("End");

// ===========================

let password = "";
const len = 10;
const str = "ABCDEFG$_1234567890";

for (let i = 0; i < len; i++) {
  const randomIndex = Math.round(Math.random() * (str.length - 1));
  password += str[randomIndex];
}

console.log(password);

// console.log();

// for (let i = 0; i < 100; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log(i);
// }
