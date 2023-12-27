/**
 * Масив об'єктів
 *
 * - Перебор масива
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */

/* const friends = [
  { name: "Mango", online: false, price: 100 },
  { name: "Kiwi", online: true, price: 200 },
  { name: "Poly", online: false, price: 300 },
  { name: "Ajax", online: true, price: 400 },
  { name: "Mango", online: false, price: 100 },
  { name: "Kiwi", online: true, price: 200 },
  { name: "Poly", online: false, price: 300 },
  { name: "Ajax", online: true, price: 400 },
]; */

// for (const friend of friends) {
// const str = `Name:${friend.name}, online: ${friend.online}`;
//   console.log(friend);
// }

// for (let i = 0; i < friends.length; i++) {
//   console.log(i + 1, friends[i].name);
// }

// console.table(friends);

/**
 * Пошук друга за іменем
 */
// function findFriendByName(allFriends, friendName) {
//   for (const item of allFriends) {
//     if (item.name === friendName) {
//       return item;
//     }
//   }
//   return null;
// }

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

/**
 * Отримуємо імена всіх лрузів
 */
// function getAllNames(allFriends) {
//   const resultArr = [];

//   for (const obj of allFriends) {
//     resultArr.push(obj.name);
//   }

//   return resultArr;
// }

// console.log(getAllNames(friends));

/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */

const friends1 = [
  { name: "Mango", online: false, price: 100 },
  { name: "Kiwi", online: true, price: 200 },
  { name: "Poly", online: false, price: 300 },
  { name: "Ajax", online: true, price: 400 },
];

const friends2 = [
  { name: "Mango2", online: false, price: 100 },
  { name: "Kiwi2", online: true, price: 200 },
  { name: "Poly2", online: false, price: 300 },
  { name: "Ajax2", online: true, price: 400 },
];

/* const friends3 = [
  { name: "Mango3", online: false, price: 100 },
  { name: "Kiwi3", online: true, price: 200 },
  { name: "Poly3", online: false, price: 300 },
  { name: "Ajax3", online: true, price: 400 },
]; */

/* function getOnlineFriends(allFriends) {
  const arr = [];

  for (const item of allFriends) {
    if (item.online) {
      arr.push(item.name);
    }
  }
  console.log(arr);
}

getOnlineFriends(friends1); */

/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }

//   return "Error";
// }

// const myPrice = calcTotalPrice(stones, "awdawd");
// console.log(myPrice);
