/**
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

/* const numbers = [5, 10, 15, 20, 25];

const total = numbers.reduce((acc, el, idx, arr) => {
  return acc + el;
}, 0);

console.log(total); */

/**
 * Рахуємо загальну зарплату
 */

/* const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce((acc, el) => {
  return acc + el;
}, 0);

console.log(totalSalary); */

/**
 * Рахуємо загальну кількість годин
 */

/* const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

const totalTimePlayed = players.reduce((acc, el) => {
  return acc + el.timePlayed;
});

console.log(totalTimePlayed); */

/* const superPlayer = players.reduce((maxPlayer, player) => {
  if (maxPlayer.timePlayed < player.timePlayed) {
    return player;
  } else {
    return maxPlayer;
  }
}); */

// console.log(superPlayer);
/**
 * Рахуємо загальну суму товарів кошика
 */

/* const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const totalPrice = cart.reduce((acc, el) => {
  return acc + el.price * el.quantity;
}, 0);

console.log(totalPrice); */
