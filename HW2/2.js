"use strict";

/*
Необходимо переписать данный код, используя тернарный оператор.
Если есть какие-либо недочеты в коде, можете их исправить.
*/



const test = prompt("У вас много денег?");
// if (test === true) {
//   console.log("Скоро будем у вас ;)");
// } else {
//   console.log("До свидания.");
// }

test.toLowerCase() === 'да' ? console.log("Скоро будем у вас ;)") : console.log("До свидания.");

/*
Если заморочиться, то можно записать вот так, но это не читаемо
test.toLowerCase() === 'да' ? console.log("Скоро будем у вас ;)") : test.toLowerCase() === 'нет' ? console.log("До свидания.") : console.log("Ответ только да или нет");
*/
