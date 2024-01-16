// function round5(num) {
//     const res = Math.round(num / 5) * 5;
//     if (res === 0) {
//         return 0;
//     } return res;
// }

// console.log(round5(0)); // 0
// console.log(round5(2)); // 0
// console.log(round5(3)); // 5
// console.log(round5(11)); // 10
// console.log(round5(14)); // 15
// console.log(round5(50)); // 50
// console.log(round5(-2)); // 0
// console.log(round5(-3)); // -5

/*
Павел Тарасов Напишите программу, которая выводит на экран числа от 1 до 100. При этом вместо
чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел,
кратных пяти — слово «Buzz». Если число кратно и 3, и 5, то программа должна
выводить слово «FizzBuzz» 
*/

function FizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) { console.log('FizzBuzz'); }
    else if (i % 3 === 0) { console.log('Fizz'); }
    else if (i % 5 === 0) { console.log('Buzz'); }
    else { console.log(i); }
  }
}

FizzBuzz(15);
