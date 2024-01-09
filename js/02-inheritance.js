/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sleep() {
    console.log("Zzzz");
  }

  eat() {
    console.log("Eat");
  }
}

class Teacher extends User {
  constructor(x, t, q) {
    super(x, t);
    this.salary = q;
    this.class = "";
  }

  startLesson() {
    console.log("Start");
  }

  endLesson() {
    console.log("End");
  }
}

class Student extends User {
  constructor(x1, x2, x3) {
    super(x1, x2);
    this.group = x3;
  }
  goToUniver() {
    console.log("Go");
  }
}

// const t1 = new Teacher("Dmytro", 28, 5000);
// const s1 = new Student("Vasya", 18, "PZ-121");

// console.log(t1);
// console.log(s1);

// t1.startLesson();
// s1.goToUniver();

// s1.sleep();
// t1.sleep();
