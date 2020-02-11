(function () {
    'use strict';

    let number = prompt("Введите число и узнайте все его делители");
    let divisor = 0;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            document.write(`${i} </br> `);
        }
    }
})()

// Запросить у пользователя число и вывести все делители этого числа.