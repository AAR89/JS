'use strict';

/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

function showOddsAndEvenNumbers(num) {
  for (let i = 0; i <= num; i++) {
    if (i === 0) {
      console.log(`${i} - это ноль`);
    } else if (i % 2 === 1) {
      console.log(`${i} - нечетное число`);
    } else if (i % 2 === 0) {
      console.log(`${i} - четное число`);
    }
  }
}

showOddsAndEvenNumbers(11);
