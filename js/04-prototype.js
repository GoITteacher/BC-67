/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */
// ======================================

// const obj1 = {
//   x1: 10,
//   x2: 20,
// };

// const obj2 = {
//   y1: 50,
//   y2: 60,
//   __proto__: obj1,
// };

// const obj3 = {
//   q1: 50,
//   q2: 60,
//   __proto__: obj2,
// };

// const obj4 = {
//   t1: 50,
//   t2: 60,
//   __proto__: obj3,
// };

/* for (const key in obj4) {
  if (obj4.hasOwnProperty(key)) {
    console.log(key);
  }
} */
// for (const key in obj4) {
//   console.log(key, obj4[key], obj4.hasOwnProperty(key));
// }

/* const objA = {
  x: 10,
};

const objB = Object.create(objA);

objB.t1 = 10;
objB.t2 = 20;

console.log(objB); */

// ======================================
/* const animal = {
  legs: 4,
};

const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog);
console.log(dog.name);
console.log(dog.legs);
console.log(dog.hasOwnProperty("name"));
console.log(dog.hasOwnProperty("legs"));

for (const key in dog) {
  if (dog.hasOwnProperty(key)) {
    console.log(key); // "name"
  }
} */

/**
 * ----------------------------------------
 */
/* const objC = { c: "objC prop" };

const objB = Object.create(objC);
objB.b = "objB prop";

const objA = Object.create(objB);
objA.a = "objA prop";

console.log(objA);
console.log(objB);
console.log(objC);

console.log(objA.hasOwnProperty("a"));
console.log(objA.a);

console.log(objA.hasOwnProperty("b"));
console.log(objA.b);

console.log(objA.hasOwnProperty("c"));
console.log(objA.c);

console.log(objA.hasOwnProperty("x"));
console.log(objA.x);
 */
