/* function foo({
  firstname,
  lastname,
  patronymic,
  age,
  money,
  isStudent,
  isAdmin,
}) {
  console.log(firstname);
  console.log(lastname);
  console.log(patronymic);
  console.log(age);
  console.log(money);
  console.log(isStudent);
  console.log(isAdmin);
}

const obj = {
  money: 40,
  firstname: 'awdawd',
  isAdmin: true,
  patronymic: 'sefsef',
  age: 20,
  isStudent: false,
  lastname: 'adaw',
};

foo(obj); */

/**
 * Деструктуризація об'єкта в параметрах функції
 */

const user = {
  username: 'Jacob name',
  skills: {
    html: true,
    css: false,
    js: true,
  },
};

// Без деструктуризації

/* function getUserName(obj) {
  console.log(
    `Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`,
  );
} */

// З деструктуризацією

/* function getUserName({ username, skills: { html, css, js } }) {
  console.log(
    `Hello my name is ${username}, I know html - ${html}, css - ${css} and js -${js}`,
  );
} */

/* function foo({
  id = 'test_id',
  title = 'test_title',
  author = 'test_author',
} = {}) {
  console.log(id, title, author);
}

const book = {
  id: '123123',
  author: 'awdawd',
  desc: 'drgd',
};

foo(book); */
