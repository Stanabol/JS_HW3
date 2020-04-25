// Определить количество цифр в введенном числе.
let num = +prompt("Введите число");
let count = 0;
while (num !== num % Math.pow(10, count)) {
    count++;
}
alert(`Данное число ${num} состоит из ${count}-х цифр`);