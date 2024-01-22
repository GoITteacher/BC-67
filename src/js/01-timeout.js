/*
 * Метод window.setTimeout(callback, delay, args)
 */

/* console.log('До виклику setTimeout');

setTimeout(() => {
  console.log('1 - Всередині зворотного виклику для setTimeout');
}, 3000);

setTimeout(() => {
  console.log('2 - Всередині зворотного виклику для setTimeout');
}, 1000);

console.log('Після виклику setTimeout'); */

/* const id = setTimeout(() => {
  console.log('Hello1');
}, 4000);

setTimeout(() => {
  console.log('Remove');
  clearTimeout(id);
}, 1000); */

/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */
/* const logger = time => {
  console.log(`Лог через ${time} мс, оскільки не скасували таймаут`);
}; */

/**
 * Можливість передати параметри для колбеку
 */
/* const id = setTimeout((name, country) => {
  console.log(`Hello, my name is ${name}, I'm from ${country}`);
}, 1000); */
/* 
function logI(i, str) {
  console.log(str, i);
}

for (let i = 0; i < 5; i++) {
  setTimeout(logI, 3000, i, 'Hello');
}
 */
