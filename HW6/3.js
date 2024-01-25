'use strict';

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(rootElement, targetClass) {
    if (rootElement.classList.contains(targetClass)) {
        return rootElement;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const child of rootElement.children) {
        const element = findElementByClass(child, targetClass);
        if (element) {
            return element;
        }
    }
    return null;
}

const rootElement = document.querySelector('.root');

// ищем корень с классом "general" через функцию
const targetElement = findElementByClass(rootElement, 'general');
console.log(targetElement);

// ищем параграф с классом "my-class"
const targetParagraph = findElementByClass(rootElement, 'my-class');
console.log(targetParagraph);

// ищем вложенный див с классом "nested-div"
const targetNestedDiv = findElementByClass(rootElement, 'nested-div');
console.log(targetNestedDiv);

// ищем третий див с классом "third-div"
const targetThirdDiv = findElementByClass(rootElement, 'third-div');
console.log(targetThirdDiv);
