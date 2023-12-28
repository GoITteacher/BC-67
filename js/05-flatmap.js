/* const arr = [[[[[1]]]]];

const result = arr.flat(Infinity);

console.log(result); */

/**
 * Метод flatMap
 */

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// const tags = tweets;
// console.log(tags);

const result = tweets.flatMap((tweet) => tweet.tags);
// console.log(result);

const users = [
  { name: "Borys", friends: ["Max", "Roman"] },
  { name: "Artem", friends: ["Igor", "Marina"] },
  { name: "Vasya", friends: ["Ivan", "Ruslan"] },
  { name: "Vika", friends: ["Mila"] },
  { name: "Alena", friends: ["Nasya", "Lika", "Max"] },
];

const allFriends = users.flatMap((user) => user.friends);

console.log(allFriends);
