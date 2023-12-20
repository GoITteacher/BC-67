/**
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Метод includes
 * - Цикл for...of
 * - Різниця у використанні for и for...of
 */

// const arr = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < arr.length; i += 2) {
//   console.log(arr[i]);
// }

//========================

// const nums = [3, 1, 3, 4, 8, 2];

// for (let i = 0; i < nums.length; i++) {
//   nums[i] *= 2;
// }

// console.log(nums);

// =====================
/* const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [5, 9, 2, 5];

function filterArr(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  return result;
}

const arr3 = filterArr(array1, array2);

console.log(arr3); */
// =====================
/* 
const nums = [4, 3, 6, 7, 3, 1, 3, 5];

let total = 0;

for (let item of nums) {
  total += item;
}

console.log(total); 
*/

// =====================

/* 
const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
console.table(friends);

for (let i = 0; i < friends.length; i += 1) {
  friends[i] += `-${i}`;
}

console.table(friends);

for (let friend of friends) {
  console.log(friend);
  console.log(friends);
} */

/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */
/* 
function foo(str) {
  const nums = str.split(" ");

  const a = Number(nums[0]);
  const b = Number(nums[1]);

  return a * b;
}

const res1 = foo("8 9");
const res2 = foo("10 03"); 
*/

/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// function foo(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`${i + 1}: ${arr[i]}`);
//   }
// }

// foo(fruits);
