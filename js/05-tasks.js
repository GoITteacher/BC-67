/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

/* function getTotalEven(arr) {
  let total = 0;

  for (const num of arr) {
    if (num % 2 === 0) {
      total += num;
    }
  }

  return total;
}

const total = getTotalEven(numbers);
console.log(total); 
*/

/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */
/* 
const names = "Jacob,William,Solomon,Artemis";
const phones = "89001234567,89001112233,890055566377,890055566300";

const nameList = names.split(",");
const phoneList = phones.split(",");
let result = "";

for (let i = 0; i < nameList.length; i++) {
  const name = nameList[i];
  const phone = phoneList[i];
  const str = `${name} - ${phone}\n`;
  result += str;
}

console.log(result); */

/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символ пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

/* const string = "Welcome to the future";

const wordList = string.split(" ");

wordList.shift();
wordList.pop();

const result = wordList.join(" ");

console.log(result); */

/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

const salaries = [2, 17, 94, 1, 23, 37];

function getMin(arr) {
  let minSalary = Infinity;

  for (const salary of arr) {
    if (salary < minSalary) {
      minSalary = salary;
    }
  }

  return minSalary;
}

const result = getMin(salaries);
console.log(result);
