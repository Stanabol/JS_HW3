// Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
let num = +prompt("Введите число");
let move = +prompt("На сколько цифр сдвинуть?");
let numbers = 0;

while (num !== num % Math.pow(10, numbers)) {
    numbers++;
}

if (numbers > move) {
    let step = (numbers - move);
    let RightSide = num % (Math.pow(10, step));
    let LeftSide = (num - RightSide) / (Math.pow(10, step));
    let result = RightSide * (Math.pow(10, move)) + LeftSide;
    alert(result);
} else
    alert("Число сдвига превышает длину самого число");




