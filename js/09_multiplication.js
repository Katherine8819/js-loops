(function () {
    'use strict';

    document.write(`<table>`);

    for (let i = 1; i <= 10; i++) {
        document.write(`<tr>`);
        document.write(`<td> ${i} </td>`);

        for (let j = 2; j <= 10; j++) {
            document.write(`<td> ${i * j} </td>`);
        }
        document.write(`</tr>`);
    }
    document.write(`</table>`);

})()



// Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.