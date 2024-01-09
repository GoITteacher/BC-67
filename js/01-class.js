/**
 * Классы
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */
/* 
class User {
  #age;

  constructor(name, age, phoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;

    if (age > 0 && age < 130) {
      this.#age = age;
    } else {
      this.#age = 1;
    }
  }

  showInfo() {
    console.log(this.#getString());
  }

  showAge() {
    console.log(this.#age);
  }

  showObj() {
    console.log(this);
  }

  set age(newValue) {
    if (newValue > 0 && newValue < 130) {
      this.#age = newValue;
    } else {
      console.log("Error! Invalid value!");
    }
  }

  get age() {
    return this.#age;
  }

  #getString() {
    return `Name: ${this.name}\nAge:${this.#age}`;
  }
}

const user1 = new User("Petya", 30, "09234234");
 */

// ========================

/* class Cat {
  static count = 0;


  constructor(name) {
    this.name = name;
    Cat.count += 1;
  }

  sayHello() {
    console.log("Myaw");
  }
}

const cat1 = new Cat("Marsik");
const cat2 = new Cat("Marsik");
const cat3 = new Cat("Marsik");

console.log(Cat.count); */

/* class Item {
  static discount = 0.1;

  constructor(name, amount, price) {
    this.name = name;
    this.amount = amount;
    this.price = price;
  }

  instanceShowInfo() {
    const info = `-----------------------
Name: ${this.name}
Amount: ${this.amount}
Price: ${this.price}
TotalPrice: ${this.price * this.amount}
Price with discount: ${this.price * this.amount * (1 - Item.discount)}
-----------------------`;

    console.log(info);
  }

  static showInfo() {
    console.log("HELLO");
  }

  static hello() {
    console.log("Hello world");
  }
} */

// const item1 = new Item("Iphone13", 10, 1000);
// const item2 = new Item("Iphone12", 7, 900);
// const item3 = new Item("Iphone14", 5, 1400);

// item1;

// // item1.showInfo();
// // item2.showInfo();
// // item3.showInfo();

// ============================

/* class Test {
  name;

  get hello() {
    console.log("Hello Test");
  }

  set hello(x) {
    console.log("Hello", x);
  }
}

const t1 = new Test();

t1.hello;
t1.hello = 10; */
