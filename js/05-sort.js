/**
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */
//  const arr = ["Hello", "World", "End", "Start", "Alpha", "Omega"];

/* const numbers = [1, 9, 4, 5, 2];

const copy = numbers.sort((a, b) => {
  return a - b;
});

console.log(numbers);
console.log(copy); */

// const sorted = numbers;
// console.log("sorted ", sorted);

// const letters = ["b", "B", "a", "A"];
// console.log("letters", letters);

/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

// console.log(
//   numbers.toSorted((curEl, nextEl) => {
//     return nextEl - curEl;
//   })
// );

// const descSortedNumbers = numbers;
// const ascSortedNumbers = numbers;
// console.log("descSortedNumbers", descSortedNumbers);
// console.log("ascSortedNumbers", ascSortedNumbers);

/**
 * Сортування масиву об'єктів
 */

/* const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false, age: 10 },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true, age: 10 },
  { id: "player-3", name: "Aiwi", timePlayed: 230, online: true, age: 25 },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false, age: 25 },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true, age: 7 },
];

players.sort((a, b) => {
  return a.name.localeCompare(b.name);
});

console.table(players); 
*/

/* players.sort((a, b) => {
  if (a.age !== b.age) {
    return a.age - b.age;
  } else {
    return a.timePlayed - b.timePlayed;
  }
});
*/

// За ігровим часом
// const sortedByBestPlayers = players;
// console.table(sortedByBestPlayers);

// const sortedByWorstPlayers = players;
// console.table(sortedByWorstPlayers);

// По первой букве имени
// const byName = players;
// console.table(byName);

/* const arr = ["Hello", "World", "Test", "Alpha", "Omega"];

arr.sort((a, b) => {
  return a.localeCompare(b);
});

console.log(arr); */
