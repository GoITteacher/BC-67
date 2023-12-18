/**
 * Оператор switch
 */
/* const stars = 199;

switch (stars) {
  case 1:
  case 2:
    console.log("2000");
    break;

  case 3:
  case 4:
    console.log("4000");
    break;

  case 5:
    console.log("5000");
    break;

  default:
    console.log("Error");
} */

/* if (stars === 1) {
  // ......
} else if ((stars = 2)) {
  // ......
} else if (stars === 3) {
  // ......
} else if (stars === 4) {
  // ......
} else if (stars === 5) {
  // ......
} else {
  console.log("Error");
} */

// const username = "Mango";

/**
 * Виконай рефакторинг коду задачі використовуючи switch.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

/* const daysUntilDeadline = 5;

if (daysUntilDeadline === 0) {
  console.log("Today");
} else if (daysUntilDeadline === 1) {
  console.log("Tomorrow");
} else if (daysUntilDeadline === 2) {
  console.log("Overmorrow");
} else {
  console.log("Date in the future");
} */

/* switch (daysUntilDeadline) {
  case 0:
    console.log("Today");
    break;

  case 1:
    console.log("Tomorrow");
    break;

  case 2:
    console.log("Overmorrow");
    break;

  default:
     console.log("Date in the future");
}*/

/*
 * Напиши скрипт вибору опції доставки товару.
 * Опція зберігається в змінній option: 1 - самовивіз, 2 - кур'єр, 3 - пошта
 *
 * У змінну message записати повідомлення в залежності від опції.
 * - 'Ви зможете забрати товар завтра з 12:00 у нашому офісі'
 * - 'Кур'єр доставить замовлення завтра з 9:00 до 18:00'
 * - 'Замовлення буде відправлено сьогодні'
 * - 'Вам передзвонить менеджер'
 */

const option = -10;
let message = "";

switch (option) {
  case 1:
    message = "Ви зможете забрати товар завтра з 12:00 у нашому офісі";
    break;

  case 2:
    message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00";
    break;

  case 3:
    message = "Замовлення буде відправлено сьогодні";
    break;

  default:
    console.log("Вам передзвонить менеджер");
}

console.log(message);
