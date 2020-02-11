(function () {
    'use strict'

    let num = 0;
    let quantity = 0;
    let zero = 0;
    let neg = 0;
    let pos = 0;
    let even = 0;
    let odd = 0;

    for (let i = 1; i <= 10; i++) {
        num = prompt('Type any number.');
        quantity++;
        console.log(num)
        if (num == 0) {
            zero++;
        }
        if (num < 0) {
            neg++
        }
        if (num > 0) {
            pos++
        }
        if (num % 2 === 0 && num != 0) {
            even++
        }
        if (num % 2 != 0) {
            odd++
        }

    };

    document.write(`<p>Вы ввели:</p>
                    <p> ${zero} нулей</p>
                    <p> ${neg} отрицательных чисел</p>
                    <p> ${pos} положительных чисел</p>
                    <p> ${even} четных чисел</p>
                    <p> ${odd} нечетных чисел</p>`);
})()


// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.