const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
    color: "red",
    isSportCar: true,
    year: 2000,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
    color: "green",
    isSportCar: false,
    year: 2020,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
    color: "blue",
    isSportCar: true,
    year: 2021,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
    color: "red",
    isSportCar: true,
    year: 2015,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
    color: "black",
    isSportCar: false,
    year: 2010,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
    color: "yellow",
    isSportCar: false,
    year: 2017,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
    color: "black",
    isSportCar: false,
    year: 2015,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
    color: "red",
    isSportCar: true,
    year: 2016,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
    color: "green",
    isSportCar: true,
    year: 2003,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
    color: "green",
    isSportCar: false,
    year: 2005,
  },
];

/* 
Знайти автомобілі дорожчі 5000
Знайти авто зеленого кольору
Знайти усі спорткари
Порахувати кількість авто 2022 року
*/

function task1() {
  const result = [];

  for (const car of cars) {
    if (car.price > 27000) {
      result.push(car);
    }
  }

  return result;
}

function task2(userColor) {
  const result = [];

  for (const car of cars) {
    if (car.color === userColor) {
      result.push(car);
    }
  }

  console.table(result);
}

function task3(userValue) {
  const result = [];

  for (const item of cars) {
    if (item.isSportCar === userValue) {
      result.push(item);
    }
  }

  console.table(result);
}

function task4(userYear) {
  let count = 0;

  for (const car of cars) {
    if (car.year === userYear) {
      count++;
    }
  }

  console.log(count);
}

/* 
{
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
    color: "red",
    isSportCar: true,
    year: 2000,
}
*/

/* 
Відсортувати машини за роком випуску (від найстарішого до найновішого).
*/

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].price > arr[j].price) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

sort(cars);

console.table(cars);
