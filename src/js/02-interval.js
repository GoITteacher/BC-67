/*
 * Метод setInterval(callback, delay, args)
 */

/* const logger = (time) => {
  console.log(`Лог кожні ${time} мс - ${Date.now()}`);
}; */

/* console.log('До виклику setInterval');

let counter = 0;

setInterval(() => {
  console.log(counter++);
}, 1000);

setInterval(() => {
  console.log('------------');
}, 5000);

console.log('Після виклику setInterval'); */

/*
 * Очищення інтервалу за допомогою clearInterval(intervalId)
 */

// const intervalId = setInterval(logger, 2000, 2000);
/* 
let counter = 0;

const id = setInterval(() => {
  console.log(counter++);
}, 1000);

document.addEventListener('click', () => {
  console.log('Remove interval');
  clearInterval(id);
}); */

setTimeout(() => {
  console.log('Hello1');
}, 0);
setTimeout(() => {
  console.log('Hello2');
}, 1000);
setTimeout(() => {
  console.log('Hello3');
}, 2000);

for (let i = 0; i < 200000; i++) {
  console.log(i);
}
