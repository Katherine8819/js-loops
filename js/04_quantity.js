(function () {
    'use strict'

    let number = prompt("Введите любое число и я посчитаю, сколько в нем цифр")
    let quantity = 0;

    while (number >= 1) {
        number /= 10;
        quantity++
        if (number < 1) {
            document.write("В числе " + quantity + " цифр.");
        }
    }
})()

// Определить количество цифр в введенном числе.