/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */
// ====================================

/* function showName(x, y) {
  console.log(this.name, x + y);
}

const obj1 = {
  name: "Alex",
};

const obj2 = {
  name: "Anton",
};

const param1 = 10;
const param2 = 20;
showName.call(obj1);

const rgb = [55, 110, 255];
showName.apply(obj2);
 */
// ====================================

/* const obj1 = {
  name: "Anton",
  showThis() {
    console.log(this);
  },
};

const obj2 = {
  name: "Max",
};

const obj3 = {
  name: "Vasya",
};

obj1.showThis.call(obj2);
obj1.showThis.apply(obj3); */

// ====================================

// BIND

/* function foo() {
  console.log(this);
}

const copy = foo;

copy(); */

/* function foo() {
  console.log(this);
}
const obj1 = {
  name: "Anton",
};

const obj2 = {
  name: "Max",
};

const obj3 = {
  name: "Vasya",
};

const copy = foo.bind(obj1);
const copy2 = foo.bind(obj3);

copy2(); */

/* 
- arrow
- bind 
- call apply
- object
- window || undefined 
*/

// obj1.foo.call(obj2);
// ====================================

/* const showThis = function (a, b, arr) {
  console.log(a, b, arr);
  console.log("showThis -> this", this);
};

showThis();

const objA = {
  a: 5,
  b: 10,
};

showThis.call(objA, 5, 1, [100, 200, 300]);
showThis.apply(objA, [5, 1, [100, 200, 300]]);

const objB = {
  x: 788,
  y: 25,
};

showThis.call(objB, 1, 1, 2);
showThis.apply(objB, [1, 1, 2]);

showThis(); */

/**
 * -------------------------------
 */
/* const changeColor = function (color) {
  console.log("changeColor -> this", this);
  this.color = color;
};

const hat = {
  color: "black",
};

changeColor.call(hat, "orange");
console.log(hat);

const sweater = {
  color: "green",
};

changeColor.call(sweater, "blue");
console.log(sweater); */

/**
 * -------------------------------
 */
/* const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

changeHatColor("yellow");
console.log(hat);

changeSweaterColor("red");
console.log(sweater);
 */
/**
 * -------------------------------
 */
/* const counter = {
  value: 0,
  increment(value) {
    console.log("increment -> this", this);
    this.value += value;
  },
  decrement(value) {
    console.log("decrement -> this", this);
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

updateCounter(10, counter.increment.bind(counter));
updateCounter(5, counter.decrement.bind(counter));
console.log(counter);
 */

// ====================================

/* function foo() {
  const test = () => {
    console.log(this);
  };

  test();
}

foo.call(10); */

/* 
1. Визначити тип функції
- якщо звичайна дивимось момент виклику
- якщо стрілчата то дивимось момент створення на контекст бат. ф.
*/

// ===========================
/* 
function foo() {
  const test1 = () => {
    const test2 = () => {
      console.log(this);
    };

    test2();
  };

  test1();
}

foo.call("Hello"); */

// ============================

/* const obj1 = {
  name: "awaef",
  age: "123",
  showInfo() {
    console.log(this.name);
    console.log(this.age);
  },
};

const obj2 = {
  name: "awdawd",
  age: 22,
};

obj1.showInfo.call(obj2); */
