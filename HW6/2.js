'use strict';

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
    let counter = 0;
    return {
        increment: () => counter++,
        decrement: () => counter--,
        result: () => counter,
    };
}

const calc = createCounter();
calc.increment();
console.log(calc.result());
calc.decrement();
console.log(calc.result());
