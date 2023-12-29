const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 102, online: false },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: false },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: true },
  {
    id: "player-5",
    name: "Chelsy",
    timePlayed: 280,
    points: 48,
    online: false,
  },
];

/**
 * Метод every
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо всі елементи масиву задовольняють умову
 */

/* const isAllOnline = players.every((el, idx, arr) => {
  console.log(el.id);
  return el.online;
}); */
// 1 * 1 * 0 * 1 * 1 = 0;
// true && true && true && true && true = true

// console.log("isAllOnline: ", isAllOnline);

/**
 * Метод some
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо хоча б один елемент масиву задовольняє умову
 */
/* const isAnyOnline = players.some((user) => {
  return user.online; //true
});

console.log("isAnyOnline: ", isAnyOnline);

const anyHardcorePlayers = players.some((player) => {
  return player.points > 100;
});

console.log("anyHardcorePlayers: ", anyHardcorePlayers);
 */
