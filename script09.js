// Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

for (let i = 1; i <= 10; i++)

    for (let j = 2; j < 10; j++)

        document.write(j + "*" + i + " = " + (i * j) + "<br>");