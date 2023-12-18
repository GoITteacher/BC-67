/*
 * Блокова область видимості змінних
 */

/* const a = 10;
console.log(a);

if (true) {
  const a = 20;
  console.log(a);

  if (true) {
    const a = 30;
    console.log(a);
  }
}
 */

const c = 15;

if (true) {
  const a = 5;
  console.log(a);
  // console.log(b);
  console.log(c);
}

if (true) {
  const b = 10;
  // console.log(a);
  console.log(b);
  console.log(c);
}

// console.log(a);
// console.log(b);
console.log(c);
