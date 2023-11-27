/* Empire State Building — це відомий хмарочос у Нью-Йорку. У ньому 102 поверхи.
За умовою задачі, поверхи з 24 по 39 включно — секретні. Тобто потрапити туди можна через пароль.
Вам треба написати програму, яка імітує ліфт Empire State Building:
Питає номер поверху.
Якщо менше ніж 1 чи більше ніж 102, то виводить "невірний поверх".
Якщо поверх НЕ запаролений — пише "ок".
Якщо ж запаролений, то просить ввести пароль:
Якщо пароль дорівнює 1337, то програма пише "ок"
Інакше — пише "невірний пароль". */

// Запитати номер поверху
var floorNumber = prompt("Введіть номер поверху Empire State Building:");

// Перевірка чи введений номер поверху є числом та в межах від 1 до 102
if (!isNaN(floorNumber) && floorNumber >= 1 && floorNumber <= 102) {
	// Перевірка чи поверх є скритним (від 24 до 39 включно)
	if(floorNumber >= 24 && floorNumber <= 39) {
		// Питання про пароль
		var password = prompt("Цей поверх захищений паролем. Введіть пароль:")
		if (password === "1337") {
			alert("OK");
		} else {
			alert("Невірний пароль");
		}
	} else {
		// Повідомлення, якщо поверх не є секретним
		alert("Ок");
	}
} else {
	// Повідомлення, якщо введений номер поверху некоректний
	alert("Невірний поверх");
}
/* Цей код враховує усі вказані умови та виводить відповідні повідомлення в залежності від введеного номеру поверху та, якщо необхідно, паролю. */