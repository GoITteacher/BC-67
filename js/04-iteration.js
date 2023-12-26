/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

/* const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};
let totalFeedback = 0;

for (const key in feedback) {
  totalFeedback += feedback[key];
}

console.log("totalFeedback: ", totalFeedback); */

// const obj0 = {
//   m: 10,
//   n: 20,
//   l: 30,
// };

// const obj1 = {
//   x: 10,
//   y: 20,
//   q: 30,
//   __proto__: obj0,
// };

// const obj2 = {
//   t: 10,
//   w: 20,
//   e: 30,
// };

/* let total = 0;
for (const key of Object.keys(obj2)) {
  obj2[key] *= 2;
}
console.log(obj2); */

/* let total = 0;
for (const value of Object.values(obj2)) {
  total += value;
}
console.log(total); */

// const arr = Object.entries(obj2);
// for (const pair of arr) {
//   console.log(pair[1]);
// }

/**
 * ---------------------------------
 */
// const keys = feedback;
// console.log(keys);

// console.log("totalFeedback: ", totalFeedback);

// const values = feedback;
// console.log(values);

// console.log('totalFeedback: ', totalFeedback);
// =================================

/* const user = {
  name: "Vlad",
  age: 20,
  phoneNumber: "123",
  isStudent: false,
};
const keys = Object.keys(user);
console.log(keys);
console.log(keys.includes("isStudent"));
 */
