// Запросить 2 числа и найти только наибольший общий делитель.
let first = +prompt("Введите первое число"),
    second = +prompt("Введите второе число"),
    buf = '';

min = first < second ? first : second;
max = first > second ? first : second;

for (let i = min; i <= max; i++) {
    if (first % i == 0 && second % i == 0) {
        buf = i
    }
}

alert(`У чисел ${first} и ${second} найбольший общий делить - ${buf}`)