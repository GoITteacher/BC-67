/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

// console.log(Boolean(true)); // true
// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(0.123)); // true
// console.log(Boolean(-10)); // true
// console.log(Boolean("")); // false
// console.log(Boolean("hello")); // true
// console.log(Boolean("false")); // true

/**
 * --------------------------------
 */

//Повертає завжди ліву частину якщо там false, в інших випадках повертає праву частину

// const x = 5 && 4;
// const x = 0 && '';
// const x = "hello" && 'test';
// const x = false && false && true && false;

// 1 * 0 * 0 * 1 = 0;
// if ("awd" && 0 && true && "0") {
// }

// const isStudent = false;
// const isAdmin = true;

// if (isStudent && isAdmin) {
//   console.log("hello");
// }

/**
 * --------------------------------
 */

//Повертає завжди ліву частину якщо там true, в інших випадках повертає праву частину

// console.log(false || 5); //5
// console.log(false || null); // null

/* const userName = "V";

const name = userName || "Anonym";

console.log("Hello", name); */
// const isStudent = false;
// const isAdmin = false;

// 1 + 1 + 0 + 1 + 0 + 0 = 3; true
/* if (true || true || false || true || false || false) {
  console.log("Hello");
} */

// 1 * 0 + 1 * 1 + 0 * 0 * 1 = 1;
// if ((true && false) || (true && true) || (false && false && true)) {
//   console.log("Hello");
// }
/**
 * --------------------------------
 */

// const x = !true;
// console.log(x);

/* console.log(!5);
console.log(!false);
console.log(!"");
console.log(!"awdawd"); */

// const isAdmin = false;
// const isStudent = false;
// if (!isAdmin && !isStudent) {
//   console.log("bye");
// }

/**
 * --------------------------------
 */

// console.log(true && 3); // 3

// console.log(false && 3);// f

// console.log(true && 4 && "kiwi");// k

// console.log(true && 0 && "kiwi");// 0

// console.log(true || 3);// t

// console.log(true || 3 || 4);// t

// console.log(true || false || 7);// t

// console.log(null || 2 || undefined);// 2

// console.log((1 && null && 2) > 0); // false

// console.log(null || (2 && 3) || 4); // 3
