// Наступне число
// Спитати у людини число та вивести на консоль число на одиницю більше.
let n = +prompt("введи число");
let a = n + 1;

console.log("Ваше число");
console.log(n);
console.log("Ваше число на один більше");
console.log(a);

// Ще можна зробити за допомогою parseFloat 
// Запитати у користувача ввести число
let userInput = prompt("Будь ласка, введіть число:");

// Перетворити введений рядок у число
let userNumber = parseFloat(userInput);

// Перевірка, чи користувач ввів коректне число
if (!isNaN(userNumber)) {
	// Вивести число на одиницю більше
	let incrementedNumber = userNumber + 1;
	console.log(`Введене число: ${userNumber}`);
	console.log(`Число на одиницю більше: ${incrementedNumber}`);
} else {
	console.log("Будь ласка, введіть коректне число.");
}
/* Цей код використовує prompt для отримання введення від користувача, перетворює введений рядок у число за допомогою parseFloat та перевіряє, чи введене значення є числом за допомогою isNaN. Якщо все коректно, воно виводить введене число та число, яке на одиницю більше.*/
