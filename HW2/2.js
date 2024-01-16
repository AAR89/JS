'use strict';

/*
Необходимо переписать данный код, используя тернарный оператор.
Если есть какие-либо недочеты в коде, можете их исправить.
*/

// eslint-disable-next-line no-restricted-globals
const test = confirm('У вас много денег?');
// if (test === true) {
//   console.log("Скоро будем у вас ;)");
// } else {
//   console.log("До свидания.");
// }

// eslint-disable-next-line no-unused-expressions
test === true ? console.log('Скоро будем у вас ;)') : console.log('До свидания.');
