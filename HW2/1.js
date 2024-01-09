"use strict";

/*
Создать переменные positive и negative, в которые пользователь вводит с 
клавиатуры значения. Нужно попросить пользователя ввести положительное число в 
переменную positive и отрицательное в переменную negative. 
Перед тем, как положить значения в данные переменные необходимо их превратить 
в числа.
После ввода значений, необходимо вывести "Все значения верные.", если 
пользователь действительно ввел корректные значения, которые мы просили его 
ввести.
Если же пользователь где-то ввел неверное значение, то необходимо вывести 
в консоль "Одно или более значений некорректно.".
*/

const inputPositive = prompt('Введите положительное число: ');
const inputNegative = prompt('Введите отрицательное число: ');

const numPositive = Number(inputPositive);
const numNegative = Number(inputNegative);


if (Number.isNaN(numPositive)) {
    console.log(`${inputPositive} не число.`);
    if (Number.isNaN(numNegative)) {
        console.log(`${inputNegative} не число.`);
    }
}
else if (numPositive > 0 && numNegative < 0) {
    console.log(`Все значения верные.`);
}
else {
    console.log(`Одно или более значений некорректно.`);
}
