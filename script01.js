// Подсчитать сумму всех чисел в заданном пользователем диапазоне.
let numOne = +prompt("Введите диапазон от");
let numTwo = +prompt("Введите диапазон до");

buf = 0;

for (let i = numOne; i <= numTwo; i++) {
    buf += i;
}

alert(`Сумма чисел диапазона от ${numOne} до ${numTwo} = ${buf}`);