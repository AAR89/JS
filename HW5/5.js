'use strict';

/*
Необходимо создать объект, в котором будут объединены два массива en и ru 
так, чтобы в объекте ключами выступали значения из массива en, а значениями 
объекта являлись значения из массива ru.
*/

const en = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const ru = [
  'понедельник',
  'вторник',
  'среда',
  'четверг',
  'пятница',
  'суббота',
  'воскресенье',
];

function concatArraysInObject(arr1, arr2) {
  const obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i];
  }
  return obj;
}

console.log(concatArraysInObject(en, ru));
