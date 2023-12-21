/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

// function logItems(items) {
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

/* function printInfo(names, phones) {
  names = names.split(",");
  phones = phones.split(" ");

  for (let i = 0; i < names.length; i++) {
    console.log(names[i], phones[i]);
  }
}

printInfo("Jacob,William", "89001234567 093545345"); */

/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

/* function formatTime(totalMinutes) {
  let hours = Math.floor(totalMinutes / 60) + "";
  let minutes = (totalMinutes % 60) + "";

  hours = hours.padStart(2, "0");
  minutes = minutes.padStart(2, "0");

  return `${hours}:${minutes}`;
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01" */

// ==============================

// function sortArray(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         const temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
// }

// const array = [4, 6, 3, 1, 3, 6];

// sortArray(array);
// console.log(array);
