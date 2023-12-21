/**
 * - Глобальна область видимості
 * - Блочна область видимості
 * - Пошук за ланцюжком областей видимості
 */

/*
const x = 10;

function foo1() {
  const y = 20;
  console.log(x + y);
}

 function foo2() {
  const y = 25;

  if (y % 2 === 0) {
    const x = 50;
    console.log(x + y);
  } else {
    console.log(x + y);
  }
}

foo1();
foo2(); */

/* const globalValue = 10;

console.log(globalValue); // 10

function foo() {
  const a = 20;
  console.log(a); // 20
  console.log(globalValue); // 10

  for (let i = 0; i < 5; i += 1) {
    console.log(a); // 20
    console.log(globalValue); // 10

    if (i === 2) {
      console.log(a); // 20
      console.log(globalValue); // 10
    }
  }
} */

for (let i = 0; i < 3; i += 1) {
  const x = 20;
}

// ❌ Помилка! Змінна a не доступна в цій області видимості
console.log(x);
