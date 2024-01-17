'use strict';

/*
Дан массив arr (ниже).
Необходимо внести такие изменения в массив, лежащий в const arr, чтобы
его значения после изменений стали: 
[1, 2, 100, 6, 7]
*/

const arr = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < arr.length; i++) {
    if (i === 2) {
        arr[i] = 100;
    } else if (i > 2 && i < 5) {
        arr.splice(3, 1);
    }
}

console.log(arr);
