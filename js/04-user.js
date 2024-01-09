/**
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */

class User {
  #login;
  #email;

  constructor(x) {
    this.login = x.login;
    this.email = x.email;
  }

  get login() {
    return this.#login;
  }
  set login(x) {
    this.#login = x;
  }

  get email() {
    return this.#email;
  }
  set email(x) {
    this.#email = x;
  }
}

const mango = new User({
  login: "Mango",
  email: "mango@dog.woof",
});

console.log(mango.login); // Mango
mango.login = "Mangodoge";
console.log(mango.login); // Mangodoge

const poly = new User({
  login: "Poly",
  email: "poly@mail.com",
});

console.log(poly.login); // Poly
poly.login = "Polycutie";
console.log(poly.login); // Polycutie
