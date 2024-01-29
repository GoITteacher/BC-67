/**
 * Синтаксис async/await
 * try...catch
 */

/* const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      return;
    });
}; */

/* const fetchTodos1 = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  console.log(data);
}; */

/*
fetchTodos()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  }); */

// =======================

// async function foo() {}

// async ()=>{}

// const obj = {
//   async showName() {},
// };

// class User {
//   async showName() {}
//   static async foo() {}
// }

// addEventListener('click', async () => {});

// =======================
/* 
function foo() {
  console.log('start');

  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      return;
    });

  console.log('test1');

  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      return;
    });

  console.log('test2');

  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      return;
    });

  console.log('end');
}

async function foo1() {
  console.log('start');

  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  console.log(data);

  console.log('test1');

  const res1 = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data1 = await res1.json();
  console.log(data1);

  console.log('test2');

  const res2 = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data2 = await res2.json();
  console.log(data2);

  console.log('end');
}

foo1();
 */

/* async function getUser(userId) {
  const url = `https://jsonplaceholder.typicode.com/comments/${userId}`;
  const res = await fetch(url);
  const user = await res.json();
  return user;
}

async function getUsers() {
  const arr = [];

  const u1 = await getUser(1);
  const u2 = await getUser(2);
  const u3 = getUser(3);
  const u4 = getUser(4);

  arr.push(u1, u2, u3, u4);

  const result1 = await Promise.all(arr);

  const promises = [];
  for (let i = 1; i < 100; i++) {
    const data = getUser(i);
    promises.push(data);
  }

  const result = await Promise.all(promises);
}

getUsers().then(data => {
  console.log(data);
});
 */
