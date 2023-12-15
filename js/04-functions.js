/**
 * Функции
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */

/* function goToStore() {
  console.log("Взяти гроші");
  console.log("Знайти список продуктів");
  console.log("Піти до магазину");
  console.log("Придбати необхідне");
  console.log("Повернутись додому з продуктами");
}

debugger;

goToStore();
goToStore(); */

// =======================

// function foo(x, y) {
//   const result = x + (y * 2) / y;
//   console.log(result);
// }
// foo(5, 10);

// foo(3, 3);

// foo(1, 2);

// ========================

// function sum(x, y) {
//   return x + y;
// }

// const y1 = sum(2, 15);
// const y2 = sum(1, 3);
// const y3 = sum(4, 6);

// console.log(y1);
// console.log(y2);
// console.log(y3);

// ===============================

// const email1 = "myEmail1@gmail.co";
// const email2 = "ryEmail2@gmail.coy";
// const email3 = "tyEmail3@gmail.coa";
// const email4 = "hyEmail4@gmail.cow";

// function getFirstAndLastSymbol(email) {
//   return email[0] + email[email.length - 2];
// }

// let result1 = getFirstAndLastSymbol(email1);
// let result2 = getFirstAndLastSymbol(email2);
// let result3 = getFirstAndLastSymbol(email3);
// let result4 = getFirstAndLastSymbol(email4);

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);

// ===========================================

/* function foo(num) {
  const x = 10;
  return x + num;
}

const result1 = foo(10);
const result2 = foo(5);

console.log(result2);
 */
// ===========================================

// console.log("Before fnA execution");
// fnA();
// console.log("After fnA execution");

// console.log("Before fnB execution");
// fnB();
// console.log("After fnB execution");

// console.log("Before fnC execution");
// fnC();
// console.log("After fnC execution");

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

// '88.3'
// function calcBMI(weight, height) {
//   weight = +weight.replace(",", ".");
//   height = +height.replace(",", ".");
//   return +(weight / height ** 2).toFixed(2);
// }

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi); // 28.8

// ==================================
// const x = 10;
// const y = 20;

// function foo1() {
//   const x = 5;
//   const t = 15;
//   console.log(x + y);
// }

// function foo2() {
//   const y = 5;
//   const t = 20;
//   console.log(x + y);
// }

// foo1();
// foo2();

// console.log(t);
