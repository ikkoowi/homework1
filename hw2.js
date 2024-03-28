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

function little(num1, num2) {
  if (num1 <= num2) {
    return num1;
  } else {
    return num2;
  }
}

//2

function even(numb) {
  if (numb % 2 === 0) {
    return "Число четное";
  } else {
    return "Число нечетное";
  }
}

//3.1

function double(par) {
  console.log(par ** 2);
}

//3.2

function dbl(prm) {
  return prm ** 2;
}

//4

function hello() {
  let howOld = prompt("Сколько Вам лет?");

  if (howOld < 0) {
    alert(`Вы ввели неправильное значение`);
  } else if (howOld > 0 && howOld <= 12) {
    alert(`Привет, друг!`);
  } else if (howOld >= 13) {
    alert(`Добро пожаловать!`);
  }
}

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

//hw2.6

//1

const arrTillTen = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arrTillTen.length; i++) {
  console.log(arrTillTen[i]);
  if (arrTillTen[i] === 10) break;
}

//2

const arrIndex = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arrIndex.length; i++) {

  if (arrIndex[i] === 4) {
    console.log(i);
  }
}

//3.

let arrJoin = [1, 3, 5, 10, 20];
arrJoin = arrJoin.join(' ');

console.log(arrJoin);

//4.

const arrOne = [];

for (let i = 0; i < 3; i++) {
  arrOne[i] = [];
  for (let j = 0; j < 3; j++) {
    arrOne[i][j] = 1;
  }
}
console.log(arrOne);

//5. 

const arrFive = [1, 1, 1];

for (n = 0; n < 3; n++) {
  arrFive.push(2);
}

console.log(arrFive);

//6.
let arrSix = [9, 8, 7, 'a', 6, 5];

arrSix = arrSix.sort();
arrSix.pop();

console.log(arrSix);

//7.

let arrSeven = [9, 8, 7, 6, 5];

let quessNum = Number(prompt("Угадай число"));

if (arrSeven.includes(quessNum)) {
  alert('Угадал');
} else {
  alert('Не угадал');
}

//8.

let eight = 'abcdef';

let arrEight = eight.split('');

arrEight.reverse();
eight = arrEight.join('');

console.log(eight);

//9.

let arrNine = [
  [1, 2, 3],
  [4, 5, 6]
];
let arrNineNew = [].concat(arrNine[0], arrNine[1]);

console.log(arrNineNew);

//10.
const arrTen = [1, 5, 7, 3, 6];

for (let t = 0; t < arrTen.length; t++) {
  let sumTen = arrTen[t] + arrTen[t + 1];
  console.log(sumTen);
}

//11.

const arrEleven = [1, 2, 3, 4, 5];

function squarEleven(k) {
  const arrElevenNew = k.map((number) => number ** 2);
  return arrElevenNew;
}

console.log(squarEleven(arrEleven));

//12. 

const arrTwelwe = ['вышел', 'зайчик', 'погулять'];

let twelweLength = function(array) {
  const arrTwelweLength = array.map((word) => word.length);
  return arrTwelweLength;
}

console.log(twelweLength(arrTwelwe));

//13. 

const arrThree = [6, -7, 8, -9, -1];

let minusThree = function(array) {
  const arrThreeNew = array.filter(nmbrs => nmbrs < 0);
  return arrThreeNew;
}

console.log(minusThree(arrThree));

//14. 

const arrRandom = Array.from({
  length: 10
}, () => Math.floor(Math.random() * 13));

console.log(arrRandom);

const arrFilter = arrRandom.filter(x => x % 2 === 0);

console.log(arrFilter);

//15. 

const arrFifteen = Array.from({
  length: 6
}, () => Math.floor(Math.random() * 10) + 1);

console.log(arrFifteen);

let allSum = arrFifteen.reduce((a, b) => a + b);

console.log(allSum);

let average = allSum / arrFifteen.length;

console.log(average);


//HW 2.7

//1.

let str = 'js';

console.log(str.toUpperCase());

//2. 

const arrWords = ['Мем', 'Мама', 'Малыш', 'Мороженое', 'Март', 'Мопс'];
let strWords = 'ма';

function searchWords(array, str) {
  return array.filter(el => el.toLowerCase().startsWith(str));
}

console.log(searchWords(arrWords, strWords));

//3. 

let myNumb = 32.58884;

console.log(Math.floor(myNumb));
console.log(Math.ceil(myNumb));
console.log(Math.round(myNumb));

//4.

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//5. 

function randomNum() {
  console.log(Math.floor(Math.random() * 11) + 1);
}
randomNum();

//6. 

function letTillX(joy) {
  const arrTillX = Array.from({
    length: Math.floor(joy / 2)
  }, () => Math.round(Math.random() * joy));
  return arrTillX;
}
console.log(letTillX(11));

//7. 

function roundThis(minNum, maxNum) {
  let thisNum = Math.ceil(Math.random() * (maxNum - minNum) + minNum);
  return thisNum;
}

console.log(roundThis(1, 9));

//8. 

let nowDate = new Date();
console.log(nowDate);

//9. 

let currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 73);
let year = currentDate.getFullYear();
let monthh = currentDate.getMonth() + 1;
let day = currentDate.getDate();

if (monthh < 10) {
  monthh = '0' + monthh;
}

console.log(`Через 73 дня будет: ${day}.${monthh}.${year}`);

//10. 

let date = new Date();
const weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

function formatDate(currentDate) {
  let fullDate = currentDate.getDate() + ' ' + months[currentDate.getMonth()] + ' ' + currentDate.getFullYear() + ' ' + '- это' + ' ' + weekDays[currentDate.getDay()];
  let fullTime = currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();
  let resultDate = `Дата: ${fullDate}. Время: ${fullTime}`;
  return resultDate;
}

console.log(formatDate(date));



