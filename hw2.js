// Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

// Задание 2
let launchYear = 2007;
alert(`Год выпуска первого iphone ${launchYear}`);

// Задание 3
let creator = "Брендан Эйх";
alert(`Создатель языка JavaScript ${creator}`);

// Задание 4
const c = 10;
const d = 2;
alert(c + d);
alert(c - d);
alert(c * d);
alert(c / d);

// Задание 5
const k = 2;
let result = 2 ** 5;
alert(result);

// Задание 6
const f = 9;
const g = 2;
alert(f % g);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// Задание 8
let age = Number(prompt("Сколько вам лет?"));
alert(age);

//9.0
let user = {
    name: 'Vasya',
    age: 33,
    isAdmin: true
};

//9.1
user["city of residence"] = true;

//9.2
user.age = 34;

//9.3
delete user["city of residence"];

//9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
console.log(user[info]);

//10
let hello = prompt("Как вас зовут?");
alert(`Привет, ${hello}!`);

//HW 2.3
//1
let password = 'пароль';
let ask = prompt("Введите пароль");
if (ask === "пароль") {
  console.log("Пароль введен верно");
} else {
  console.log("Пароль введен неправильно");
}

//2
let z = 7;
if (z > 0 && z < 10) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

//3
let w = 1;
let e = 2;

if (w > 100 || e > 100) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

//4
let v = '2';
let b = '3';
alert(Number(v) + Number(b));

//5
let monthNumber = prompt("Введите номер месяца");
switch (monthNumber) {
  case 1:
    console.log("Зима");
    break;
  case 2:
    console.log("Зима");
    break;
  case 3:
    console.log("Весна");
    break;
  case 4:
    console.log("Весна");
    break;
  case 5:
    console.log("Весна");
    break;
  case 6:
    console.log("Лето");
    break;
  case 7:
    console.log("Лето");
    break;
  case 8:
    console.log("Лето");
    break;
  case 9:
    console.log("Осень");
    break;
  case 10:
    console.log("Осень");
    break;
  case 11:
    console.log("Осень");
    break;
  case 12:
    console.log("Зима");
    break;
  default:
    console.log("Неверно")
}

//HW 2.4

// 1
let i = 0;
while (i < 2) {
  console.log("Привет!");
  i++;
}
//2
let p = 1;
while (p <= 5) {
  console.log(p);
  p++;
}
//3
let r = 7;
while (r >= 7 && r <= 22) {
  console.log(r);
  r++;
}

//4
const obj = {
  Kolya: 200,
  Vasya: 300,
  Petya: 400
}
for (let key in obj) {
  console.log(`${key} - зарплата ${obj[key]} долларов`)
}

//5
let numb = 0;
let n;

for (n = 1000; n >= 50; n = n / 2) {
  numb = numb + 1;
}
console.log(`Получилось число ${n}. Число итераций равно ${numb}`);

//6
for (let dayNumber = 1; dayNumber <= 31; dayNumber += 7) {
  console.log(`Сегодня пятница ${dayNumber}-е число. Необходимо подготовить отчет.`);
}

//HW 2.5

//1
let passwords = 'пароль';
let asks = prompt("Введите пароль");
if (asks === "пароль") {
  console.log("Пароль введен верно");
} else {
  console.log("Пароль введен неправильно");
}

//2
let t = 7;
if (t > 0 && t < 10) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

//3
let q = 1;
let s = 300;

if (q > 100 || s > 100) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

//4
let u = '2';
let x = '3';
alert(Number(u) + Number(x));

//5.

function parame(f, g) {
  if (isNaN(f) || isNaN(g)) {
    return `Одно или оба значения не являются числом`;
  } else {
    return f * g;
  }
}

console.log(parame(2, 3));

//6

function params() {
  let numbr = prompt("Введите число");
  if (isNaN(numbr)) {
    return 'Переданный параметр не является числом';
  } else {
    return numbr + ' в кубе равняется ' + numbr ** 3;
  }
}
console.log(params());

//7

function area() {
  return Math.round(Math.PI * this.radius ** 2);
}

function perim() {
  return Math.round(2 * Math.PI * this.radius);
}

const circle1 = {
  radius: 2,
  getArea: area,
  getPerimeter: perim
}

const circle2 = {
  radius: 3,
  getArea: area,
  getPerimeter: perim
}

console.log(circle1.getArea());
console.log(circle2.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getPerimeter());

//8. 

let month = Number(prompt("Введите номер месяца"));

function seasons(month) {
  if (month === 1 || month === 2 || month === 12) {
    return "Зима";
  } else if (month === 3 || month === 4 || month === 5) {
    return "Весна";
  } else if (month === 6 || month === 7 || month === 8) {
    return "Лето";
  } else if (month === 9 || month === 10 || month === 11) {
    return "Зима";
  } else {
    return "Такого месяца не существует";
  }
}
console.log(seasons(month));
