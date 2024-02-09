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