/**
 * Деструктуризація об'єкта в циклі
 */

/* const book = {
  id: 'test_book_id',
  title: 'test_book_title',
  author: 'test_book_author',
  description: 'test_book_desc',
};

const keys = Object.keys(book);
const values = Object.values(book);
const entries = Object.entries(book);
console.log(entries); */

/* 
[
  ['id', 'test_book_id'],
  ['title', 'test_book_id'],
  ['author', 'test_book_id'],
  ['description', 'test_book_id'],
]
*/

/* for (const [key, value] of entries) {
  console.log(key, value);
} */

// ================================

/* const colors = [
  { red: 100, green: 123, blue: 123 },
  { red: 100, green: 123, blue: 123 },
  { red: 100, green: 123, blue: 123 },
  { red: 100, green: 123, blue: 123 },
  { red: 100, green: 123, blue: 123 },
  { red: 100, green: 123, blue: 123 },
];

for (const { blue, red, green } of colors) {
  const avg = (red + green + blue) / 3;
  console.log(avg);
} */
// ================================

/* const colors = [
  [100, 123, 123],
  [100, 123, 123],
  [100, 123, 123],
  [100, 123, 123],
  [100, 123, 123],
  [100, 123, 123],
];

for (const [r,g,b] of colors) {
  const avg = (r + g + b) / 3;
  console.log(avg);
} */

// ================================
/* const users = [
  {
    name: "Kate",
  },
  {
    name: "Alex",
  },
  {
    name: "Mark",
  },
]; */

/**
 * Без деструктуризації
 */
/* const names = [];

for (const user of users) {
  names.push(user.name);
}

console.log(names); */

/**
 * З деструктуризацією
 */

const colors = [
  { red: 100, green: 123, blue: 123 },
  { red: 12, green: 42, blue: 23 },
  { red: 34, green: 23, blue: 65 },
  { red: 34, green: 54, blue: 34 },
  { red: 465, green: 23, blue: 123 },
  { red: 45, green: 56, blue: 12 },
];

const result = colors
  .map(({ red: r, green: g, blue: b }) => {
    return `
  <div style=" width:100px; height: 100px;background-color:rgb(${r},${g},${b});"></div>
  `;
  })
  .join('\n\n');

console.log(result);
