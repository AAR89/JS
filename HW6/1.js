'use strict';

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

function findMin(arr) {
    return Math.min(...arr);
}

const arr = [1, 5, 7, 9];
console.log(findMin(arr));
