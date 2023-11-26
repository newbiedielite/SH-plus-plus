// Щоб дізнатись тип даних чого завгодно, треба викликати команду typeof
let a = 5;
console.log("a " + typeof a);
let b = "5";
console.log("b " + typeof b);
let d;
console.log("d " + typeof d);

// Це працює не лише зі змінними, а й з літералами, тобто "голими" значеннями
console.log("3 > 2" + typeof (3 > 2));

// Перетворення рядка на число
let a = "1";
++a;
console.log(typeof a); // number, хоча ж була стрінгом!

let b =  "1";
--b;
console.log(typeof b); // number, хоча ж була стрінгом!

/* Якщо значення, що міститься в рядку не може бути визначене як число, то результатом виконання інкремента або декремента над таким текстовим рядком буде спеціальне значення NaN типу number. */
let c = "not-a-number";
++c;
console.log(typeof c); // хоч значення змінної - NaN, проте тип все одно number

/* Варто зауважити, що не потрібно вдаватися до такого способу приведення рядка до числа через його погану читабельність і неочевидність. Для цього завдання в js існують вбудовані функції parseInt і parseFloat (є ще один елегантний спосіб, ми теж його вчимо). Як перший аргумент, ці функції приймають рядок, яку необхідно привести до числа. */

// Функція parseInt використовується для перетворення рядка в ціле число, а функція parseFloat для перетворення в дробове.
let a = parseInt("10");

console.log("a = " + a);
console.log("typeof a: " + typeof a);
// a = 10
// typeof a: number

let pi = parseInt("3.1415");
console.log("parseInt, pi = " + pi); // pi = 3

pi = parseFloat("3.1415");
console.log("parseFloat, pi = " + pi); // pi = 3.1415

/* Зверніть увагу, що в рядку може бути будь-яке літеральне числове значення, в тому числі в шістнадцятковому, вісімковому або експоненційному вигляді (зараз неважливо якщо ви не розумієте що це за вигляди такі). */
let a = parseInt("010");
console.log("a = " + a); // a = 10

a = parseInt("0xAA");
console.log("a = " + a); // a = 170

a = parseFloat("1e-10");
console.log("a = " + a); // a = 1e-10 (1e-10 * 10 ^ -10 = 0.0000000001)

/* Якщо parseInt() і parseFloat() приймають першим параметром щось, що не можна привести до числа, то результатом завжди буде NaN. */
let a = parseInt ("not a number");
console.log("a = " + a); // a = NaN

a = parseFloat("not a number");
console.log("a = " + a); // a = NaN

// Але, звісно, найпростіший спосіб - це унарний плюс
let a = "5";
console.log(typeof a);

a = +"5";
console.log(typeof a);

// знову ж, це працює ш з літерами
console.log(typeof + "123");
console.log(typeof + "4.567");
