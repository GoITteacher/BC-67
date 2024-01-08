/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

/**
 * Глобальний контекст
 */

/* function foo1() {
  console.log(this);
}

function foo2() {
  console.log(this);
} */

// foo1(); // window || undefined
// foo2(); // w || u

/**
 * Контекст методу об'єкта
 */

/* const user1 = {
  name: "Vasya",
  showInfo() {
    console.log(this.name);
  },
};
const user2 = {
  name: "Petro",
  showInfo() {
    console.log("Petro");
  },
};

user1.showInfo(); */

/* const obj1 = {
  test() {
    console.log(this);
  },
};

const obj2 = {
  test() {
    console.log(this);
  },
};

const obj3 = {
  test() {
    console.log(this);
  },
};

obj1.test();
obj2.test(); */

/**
 * Контекст методу об'єкта, але оголошена як зовнішня функція.
 */

/* function showTag() {
  console.log(this.tag);
}

const obj1 = {
  tag: "Mango",
  test: showTag,
};
const obj2 = {
  tag: "poly",
  test: showTag,
}; */

/* function tesla() {
  console.log(this);
}

const obj1 = {
  name: "obj1",
  drive: tesla,
};

const obj2 = {
  name: "obj2",
  drive: tesla,
};

const obj3 = {
  name: "obj3",
  drive: tesla,
};

obj1.drive();
obj2.drive();
obj3.drive();

tesla(); */

// showTag();
// test(10,20);//widwod unedfined

/**
 * Виклик без контексту, але оголошена як метод об'єкта.
 */

// const poly = {
//   tag: "Poly",
//   showTag() {
//     console.log(this);
//   },
// };

// const mySum = poly.sum;

// test(12, 3, 5, 5, 1); // wi
// obj1.test(3, 5, 1, 1); // obj1
// showInfo(3, 5, 1, 1); // win
// poly.showInfo(3, 5, 1, 1); // poly
// vasya.test(3, 5, 1, 1); // vasya

/**
 * Контекст у callback-функціях
 */

/* function foo1(x, y, myFun) {
  const obj1 = {
    test: myFun,
  };

  obj1.test();
}

const param1 = "Hello";
const param2 = "World";

function param3() {
  console.log(this);
}

foo1(param1, param2, param3); */

// invokeAction(jacob.showTag);

// ====================

/* const obj1 = {
  name: "Vasya",
  age: 10,
  isStudent: false,

  showName() {
    console.log(this.name);
  },
};

const obj2 = {
  name: "Roman",
  age: 10,
  isStudent: false,

  showName: obj1.showName,
};

obj1.showName();
obj2.showName(); */

// ===================================

/* function foo() {
  return 10;
}

const copy = foo;

copy(); */
