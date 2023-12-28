/**
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

/* 

numbers.forEach((item, idx) => {
  console.log(item * idx);
});

numbers.forEach((item, idx) => {
  console.log(`${idx + 1}) ${item}`);
});

const myCallback = console.log;

numbers.forEach(); */
/* 
console.log(5, 0, arr)
console.log(10,1, arr)
console.log(15,2, arr)
console.log(20,3, arr)
console.log(25,4, arr)
*/
/* 
const numbers = [5, 10, 15, 20, 25];

let total = 0;

numbers.forEach((el) => {
  total += el;
});

console.log(total); */

/* const arr = ["Hello", "World", "Test", "Amigo", "Word"];

const result = arr.forEach((el) => {
  console.log(`Save to Database ${el}`);
}); */

// console.log(result);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
/* function logItems(items) {
  items.forEach((item, idx) => {
    console.log(`${idx + 1} - ${item}`);
  });
}

logItems(["Mango", "Poly", "Ajax"]);
logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]); */

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
/* function printContactsInfo({ names, phones }) {
  const nameList = names.split(",");
  const phoneList = phones.split(",");

  nameList.forEach((elem, idx) => {
    console.log(`${elem}: ${phoneList[idx]}`);
  });
}

printContactsInfo({
  names: "Jacob,William,Solomon,Artemis",
  phones: "89001234567,89001112233,890055566377,890055566300",
}); */

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
function calculateAverage(...args) {
  let total = 0;

  args.forEach((elem) => {
    total += elem;
  });

  return total / args.length;
}

console.log(calculateAverage(1, 2, 3, 4)); // 2.5
console.log(calculateAverage(14, 8, 2)); // 8
console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
