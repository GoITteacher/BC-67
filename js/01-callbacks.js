/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */
// =================================

/* function myDay(day, callback) {
  const callback = goToDanceSchool;
  console.log("\n\n-----------------");
  console.log("Прокинутись");
  console.log("Поснідати");
  console.log("Зібратись до школи на ", day);
  console.log("Піти до школи");
  console.log("Позайматись у школі");
  callback();
  console.log("Повернутись додому");
  console.log("Повечеряти");
  console.log("Пчистити зуби");
  console.log("Лягти спати");
  console.log("-----------------");
}

function goToMusicSchool() {
  console.log("Піти до муз школи");
}

function goToDanceSchool() {
  console.log("Піти до школи танців");
}

function goToShopping() {
  console.log("Піти до магазину");
}
function goToGrandMa() {
  console.log("Зайти по дорозі до бабусі занести пиріжки");
}

myDay("Понеділок", goToMusicSchool);
myDay("Вівторок", goToDanceSchool);
myDay("Пятниця", goToGrandMa); */

// function foo(t1, t2) {
//   console.log(t1, t2);
// }

// const x = foo;
// const y = foo;
// const q = foo;

// x(10, 20);
// y(10, 20);
// q(10, 20);

// =================================

// Першим параметром будуть передавати масив а другим колбек
// Потрібно викликати колбек і передати йому массив

/* function fnA(arr, callback) {
  callback(arr);
}

function fnB(number) {
  console.log("Log during fnB execution ", number);
}
 */
/**
 * Функція calc(a, b, callback)
 */

/* function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function division(a, b) {
  return a / b;
}

function toPower(a, b) {
  return a ** b;
} */

/* function calc(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

calc(2, 3, sum);

calc(2, 7, multiply);

calc(8, 1, toPower); */

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */
/* 
function each(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const res = callback(array[i]);
    result.push(res);
  }
  return result;
}

function test1(value) {
  return value * 2;
}

function toStr(num) {
  return num + "";
}

function test2(num) {
  return num * 100;
}

console.log(each([64, 49, 36, 25, 16], test2));
console.log(each([64, 49, 36, 25, 16], test1));
console.log(each([64, 49, 36, 25, 16], toStr));

each([64, 49, 36, 25, 16], function (value) {
  return value - 10;
});

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
);
console.log(
  
); */

// ===============================

/* function foo(x) {
  console.log(x);
}
function test(){}
foo(test); */

// ==================

// each([1.5, 2.1, 16.4, 9.7, 11.3], (x) => Math.ceil(x));
