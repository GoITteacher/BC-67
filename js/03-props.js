/**
 * Об'єкти
 *
 * - Короткі властивості
 * - Обчислювальні властивості
 */

/* const username = "Mango";
const email = "mango@mail.com";
const userNumber = "123123123";

const credentials = {
  username,
  email,
  userNumber,
};

console.log(credentials);
console.log(credentials.username);
console.log(credentials.email); */

/**
 * -------------------------
 */
/* const prefix = "_";
const key = "HELLO_WORLD";
const user = {
  [prefix + "Name"]: "Artem",
  [prefix + "Age"]: 25,
  [prefix + "Number"]: "23434",
  [prefix + "City"]: "Dnipro",
  [10 + 20 * 2]: "Hello",
  [key.toLowerCase()]: "Hello",
};

console.log(user); */

// ===============
const prefix = prompt("Enter Prefix");
const end = "END";
const obj = {
  [prefix + "X" + end]: "123",
  [prefix + "Y" + end]: "123",
  [prefix + "Q" + end]: "123",
  [prefix + "T" + end]: "123",
  [prefix + "W" + end]: "123",
};

console.log(obj);
