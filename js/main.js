// 1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const arr1 = [3, 'hello', false, 4, 5];
console.log('arr1', arr1);

function arithmeticAverage() {
    let numbersFromArr1 = arr1.filter(function (numbers) {
        if (typeof numbers === 'number') {
            return numbers;
        }
    });
    console.log('Числа з масиву', numbersFromArr1);

    // let result = 0;
    // for (let i = 0; i < numbersFromArr1.length; i++) {
    //     result += numbersFromArr1[i] / numbersFromArr1.length;
    // }
    // console.log('Середнє арифметичне значення =', Number(result.toFixed(2)));

    let calculateArithmeticAverage = numbersFromArr1.reduce(function (prev, elem) {
        return prev + elem / numbersFromArr1.length;
    }, 0);
    console.log('Середнє арифметичне значення =', Number(calculateArithmeticAverage.toFixed(2)));
}
arithmeticAverage();
console.log(' ');

// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь). Вивести результат математичної дії, вказаної в змінній znak. Обидва числа і знак виходять від користувача.

document.write('<button class="click">Click doMath</button>');
document.write('<br> Відповідь знаходиться в консолі <br>');
document.write('<br>');

document.querySelector('.click').addEventListener('click', function () {
    function doMath(x, znak, y) {
        x = +prompt('Введіть число');
        znak = prompt('Введіть +, -, *, /, % або ^ (ступінь)');
        y = +prompt('Введіть ще одне число');

        if (isNaN(x) || isNaN(y)) {
            console.log('Дія не може бути виконана');
        }
        else if (x === ' ' || x === null || znak === '' || znak === null || y === ' ' || y === null) {
            console.log('Ви нічого не ввели');
        }
        else {
            if (znak === '+') {
                console.log(`${x} + ${y} = ${x + y}`);
            }
            else if (znak === '-') {
                console.log(`${x} - ${y} = ${x - y}`);
            }
            else if (znak === '*') {
                console.log(`${x} * ${y} = ${x * y}`);
            }
            else if (znak === '/') {
                if (y !== 0) {
                    console.log(`${x} / ${y} = ${x / y}`);
                }
                else {
                    console.log('Друге число не може бути 0');
                }
            }
            else if (znak === '%') {
                if (y !== 0) {
                    console.log(`${x} % ${y} = ${x % y}`);
                }
                else {
                    console.log('Друге число не може бути 0');
                }
            }
            else if (znak === '^') {
                console.log(`${x} ^ ${y} = ${x ** y}`);
            }
            else {
                console.log('Ви ввели неправильний знак');
            }
        }
    }
    doMath();
});

// 3. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

document.write('<button class="click2">Click userArray</button>');
document.write('<br> Відповідь знаходиться в консолі <br>');
document.write('<br>');

document.querySelector('.click2').addEventListener('click', function () {
    function userArray() {
        let arr1FromUser = +prompt('Введіть довжину (число) першого масиву');
        let arr2FromUser = +prompt('Введіть довжину (число) другого масиву ');

        let arrFinal = [];

        for (let i = 0; i < arr1FromUser; i++) {
            let mainArr = [];

            for (let j = 0; j < arr2FromUser; j++) {
                let newItem = prompt(`Введіть елемент ${j} у підмасиві ${i}`);
                mainArr.push(newItem);
            }
            arrFinal.push(mainArr);
        }
        console.log(' ');
        console.log('userArr', arrFinal);
    }
    userArray();
});

// 4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func("hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.

document.write('<button class="click3">Click replaceSymbols</button>');
document.write('<br> Відповідь знаходиться в консолі <br>');

document.querySelector('.click3').addEventListener('click', function () {
    function replaceSymbols() {
        let sentenceFromUser = prompt('Напишіть декілька слів');
        console.log(' ');
        console.log('sentenceFromUser -->', sentenceFromUser);

        let symbolsToRemove = prompt('Напишіть літери через пробіл, які ви хочете прибрати зі слів введених раніше').split(' ');
        console.log('symbolsToRemove -->', symbolsToRemove);

        let removedSymbols = '';
        for (let i = 0; i < symbolsToRemove.length; i++) {
            removedSymbols = symbolsToRemove[i];
            sentenceFromUser = sentenceFromUser.replaceAll(`${removedSymbols}`, '');
        }
        console.log('Result -->', sentenceFromUser);
    }
    replaceSymbols();
});