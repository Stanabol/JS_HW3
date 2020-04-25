// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

do {
    let numOne = +prompt("Введите число");
    let numTwo = +prompt("Введите число");
    let operate = prompt("Введите действие (+ - * /)");
    switch (operate) {
        case "+":
            alert(numOne + numTwo);
            break;
        case "-":
            alert(numOne - numTwo);
            break;
        case "/":
            alert(numOne / numTwo);
            break;
        case "*":
            alert(numOne * numTwo);
            break;
        default:
            break;
    }
} while (confirm('Хотите продолжить?'));



