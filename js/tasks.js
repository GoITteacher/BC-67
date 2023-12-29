const users = [
  {
    firstName: "Alice",
    lastName: "Johnson",
    age: 28,
    email: "alice@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "Bob",
    lastName: "Smith",
    age: 42,
    email: "bob@example.com",
    isActive: false,
    gender: "Male",
  },
  {
    firstName: "Eva",
    lastName: "Williams",
    age: 35,
    email: "eva@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "David",
    lastName: "Brown",
    age: 22,
    email: "david@example.com",
    isActive: true,
    gender: "Male",
  },
  {
    firstName: "Sophia",
    lastName: "Davis",
    age: 29,
    email: "sophia@example.com",
    isActive: false,
    gender: "Female",
  },
  {
    firstName: "Michael",
    lastName: "Miller",
    age: 50,
    email: "michael@example.com",
    isActive: true,
    gender: "Male",
  },
  {
    firstName: "Olivia",
    lastName: "Wilson",
    age: 19,
    email: "olivia@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "Daniel",
    lastName: "Thompson",
    age: 31,
    email: "daniel@example.com",
    isActive: false,
    gender: "Male",
  },
  {
    firstName: "Ava",
    lastName: "Harris",
    age: 27,
    email: "ava@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "James",
    lastName: "Jackson",
    age: 38,
    email: "james@example.com",
    isActive: true,
    gender: "Male",
  },
  {
    firstName: "Emma",
    lastName: "Taylor",
    age: 23,
    email: "emma@example.com",
    isActive: false,
    gender: "Female",
  },
  {
    firstName: "William",
    lastName: "Anderson",
    age: 45,
    email: "william@example.com",
    isActive: true,
    gender: "Male",
  },
  {
    firstName: "Mia",
    lastName: "Martin",
    age: 29,
    email: "mia@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "Joseph",
    lastName: "Clark",
    age: 33,
    email: "joseph@example.com",
    isActive: false,
    gender: "Male",
  },
  {
    firstName: "Charlotte",
    lastName: "Rodriguez",
    age: 26,
    email: "charlotte@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "John",
    lastName: "Lopez",
    age: 31,
    email: "john@example.com",
    isActive: true,
    gender: "Male",
  },
  {
    firstName: "Amelia",
    lastName: "Lee",
    age: 20,
    email: "amelia@example.com",
    isActive: false,
    gender: "Female",
  },
  {
    firstName: "Benjamin",
    lastName: "Gonzalez",
    age: 40,
    email: "benjamin@example.com",
    isActive: true,
    gender: "Male",
  },
  {
    firstName: "Chloe",
    lastName: "Hernandez",
    age: 24,
    email: "chloe@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "Daniel",
    lastName: "Young",
    age: 37,
    email: "daniel@example.com",
    isActive: false,
    gender: "Male",
  },
  {
    firstName: "Olivia",
    lastName: "Miller",
    age: 38,
    email: "olivia@example.com",
    isActive: false,
    gender: "Female",
  },
  {
    firstName: "James",
    lastName: "Jones",
    age: 29,
    email: "james@example.com",
    isActive: true,
    gender: "Male",
  },
  {
    firstName: "Sophia",
    lastName: "Davis",
    age: 31,
    email: "sophia@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "William",
    lastName: "Wilson",
    age: 52,
    email: "william@example.com",
    isActive: false,
    gender: "Male",
  },
  {
    firstName: "Ava",
    lastName: "Taylor",
    age: 19,
    email: "ava@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "Michael",
    lastName: "Clark",
    age: 40,
    email: "michael@example.com",
    isActive: true,
    gender: "Male",
  },
  {
    firstName: "Emma",
    lastName: "Lee",
    age: 27,
    email: "emma@example.com",
    isActive: false,
    gender: "Female",
  },
  {
    firstName: "Daniel",
    lastName: "Martinez",
    age: 35,
    email: "daniel@example.com",
    isActive: true,
    gender: "Male",
  },
  {
    firstName: "Isabella",
    lastName: "Hernandez",
    age: 42,
    email: "isabella@example.com",
    isActive: false,
    gender: "Female",
  },
  {
    firstName: "Liam",
    lastName: "Garcia",
    age: 26,
    email: "liam@example.com",
    isActive: true,
    gender: "Male",
  },
  {
    firstName: "Mia",
    lastName: "Rodriguez",
    age: 30,
    email: "mia@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "Noah",
    lastName: "Lopez",
    age: 24,
    email: "noah@example.com",
    isActive: false,
    gender: "Male",
  },
  {
    firstName: "Charlotte",
    lastName: "Perez",
    age: 29,
    email: "charlotte@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "Ethan",
    lastName: "Turner",
    age: 37,
    email: "ethan@example.com",
    isActive: true,
    gender: "Male",
  },
  {
    firstName: "Amelia",
    lastName: "White",
    age: 23,
    email: "amelia@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "Alexander",
    lastName: "Jackson",
    age: 41,
    email: "alexander@example.com",
    isActive: false,
    gender: "Male",
  },
  {
    firstName: "Sofia",
    lastName: "Brown",
    age: 33,
    email: "sofia@example.com",
    isActive: true,
    gender: "Female",
  },
];

/* 
1. Знайти всіх активних користувачів.
1. Відфільтрувати користувачів, чия вікова категорія становить більше 30 років.
1. Знайти всіх жіночих користувачів.
1. Відфільтрувати користувачів, у яких вказана пошта з доменом "example.com".
1. Знайти користувачів, чия фамілія починається на "J".
  */

/* function task1() {
  return users.filter((user) => !user.isActive);
}

function task2() {
  return users.filter((user) => user.age > 30);
}

function task3() {
  return users.filter((user) => {
    return user.gender === "Female";
  });
}

console.table(task3()); */

// ================
/* 
 {
    firstName: "Sofia",
    lastName: "Brown",
    age: 33,
    email: "sofia@example.com",
    isActive: true,
    gender: "Female",
  }
*/
/* 
1. Отримати список усіх активних жіночих користувачів, відсортованих за алфавітом за ім'ям.
1. Знайти середній вік усіх активних чоловічих користувачів.
1. Отримати перший активний користувач, який має вік більше 30 років.
1. Знайти кількість унікальних електронних адрес серед активних користувачів.
1. Створити масив, в якому будуть тільки імена та фамілії активних користувачів, відсортованих за алфавітом.
*/

function task5() {
  return users
    .filter((user) => user.gender === "Female")
    .sort((a, b) => {
      return a.firstName.localeCompare(b.firstName);
    });
}
function task6() {
  return users
    .filter((user) => {
      return user.isActive && user.gender === "Male";
    })
    .reduce((acc, user, idx, arr) => {
      return acc + user.age / arr.length;
    }, 0);
}
function task7() {
  return users.find((user) => {
    return user.isActive && user.age > 30;
  });
}
function task8() {
  return users
    .filter((user) => {
      return user.isActive;
    })
    .map((user) => {
      const obj = {
        firstName: user.firstName,
        lastName: user.lastName,
      };
      return obj;
    })
    .sort((a, b) => {
      if (a.firstName === b.firstName) {
        return a.lastName.localeCompare(b.lastName);
      }
      return a.firstName.localeCompare(b.firstName);
    });
}
