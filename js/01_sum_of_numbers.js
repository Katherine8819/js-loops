(function () {
  "use strict";

  let minNumber = Number(prompt("Укажите число нижнего диапазона"));
  let maxNumber = Number(prompt("Укажите число верхнего диапазона"));
  let sum = 0;

  for (let i = minNumber; i <= maxNumber; i++) {
    sum += i;
  };
  alert(`Сумма чисел в диапазоне от ${minNumber} до ${maxNumber}: ${sum}`);
})();

// Подсчитать сумму всех чисел в заданном пользователем диапазоне.