/**
 * Форматування посилання (endsWith)
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 *  змінної link символом /. Якщо ні, додай до кінця
 *  значення link цей символ.
 * Використовуй конструкцію if...else.
 */

/* let link = "https://my-site.com/about/";

if (!link.endsWith("/")) {
  link += "/";
}

console.log(link); */

/**
 * Форматування посилання (includes та логічне «І»)
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ, але тільки в тому випадку,
 * якщо в link є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */

/* let url = "https://my-site.com/about";
const isMySite = url.includes("my-site");
const endsWithMySymb = url.endsWith("/");

if (!endsWithMySymb && isMySite) {
  url += "/";
}

console.log(url); */

/*
 * Пошук у рядку методом includes()
 */

/* const blacklistedWord1 = "spam";
const blacklistedWord2 = "sale";

const string1 =
  "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
const string2 = "Biggest SALE this week, don't miss out!";
const string3 = "#fatlivesmatter advertising campaign";

const hasBanWord1 = string3.toLowerCase().includes(blacklistedWord1);
const hasBanWord2 = string3.toLowerCase().includes(blacklistedWord2);

console.log(hasBanWord1);
console.log(hasBanWord2);

if (hasBanWord1 || hasBanWord2) {
  console.log("Has ban words");
}
 */
