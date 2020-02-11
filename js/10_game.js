(function () {
    'use strict';

    let min = 0;
    let max = 100;
    let current = 50;
    let number = 50;

    if (confirm("Загадайте число от 0 до 100")) {
        for (let i = 0; current >= min && current <= max; i++) {
            if (confirm(`Вы загадали ${current}?`)) {

            } else {
                if (confirm(`Число больше ${current}?`)) {
                    min = current;
                    current = Math.round(current + (current * 0.5));
                    console.log(`min ${min}, current ${current}`)
                } else {
                    max = current;
                    current = Math.round(current - (current * 0.5));
                    console.log(`min ${min}, current ${current}`)
                }
            }


        }
    }

})()



// Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.