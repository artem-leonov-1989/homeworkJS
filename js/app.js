function iss1() {
    let nameCountry = prompt('Ваша страна проживания?');
    if (!nameCountry) {
        alert('Вы ничего не написали!');
    } else {
        if (!isNaN(Number(nameCountry))) {
            alert('Название страны не может быть числовым!');
        }
    }
}

function iss2() {
    let num1 = prompt('Введите первое число');
    let num2 = prompt('Введите второй число');
    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        if (num1 % num2 === 0) {
            alert('Второе число кратное первому');
        } else {
            alert('Второе число HE кратное первому');
        }
    } else {
        alert('Оба значения должны быть числовыми!')
    }
}

function iss3() {
    let num = prompt('Введите число');
    if (num && !isNaN(Number(num))) {
        if (Number(num) % 2 === 0) {
            alert('Число четное');
        } else {
            alert('Число нечетное');
        }
    } else {
        alert('Строка пуста или не число!');
    }
}

function iss4() {
    let num = prompt('Введите число от 1 до 100');
    if (num && !isNaN(Number(num))) {
        num = Number(num);
        if (num >= 1 && num <= 100) {
            if (num >= 1 && num <= 25) {
                alert('Первая четверть');
            }
            if (num >= 26 && num <= 50) {
                alert('Вторая четверть');
            }
            if (num >= 51 && num <= 75) {
                alert('Третья четверть');
            }
            if (num >= 76 && num <= 100) {
                alert('Четвертая четверть');
            }
        } else {
            alert('Число не в заданном диапазоне!');
        }
    } else {
        alert('Строка пуста или не число!');
    }
}

function iss5() {
    console.clear();
    for (let i = 1; i <= 500; i++) {
        console.log(i);
    }
}

function iss6() {
    console.clear();
    for (let i = 1000; i >= 300; i--) {
        console.log(i);
    }
}

function iss7() {
    console.clear();
    let num = prompt('Введите число');
    if (num && !isNaN(Number(num))) {
        num = Number(num);
        for (let i = 1; i <= 100; i++) {
            console.log(`Сумма = ${num + i}, Разность = ${num - i}, Произведение = ${num * i}, Частное = ${num / i}`);
        }
    } else {
        alert('Числоооо... не просто ENTER, не какую-то х...ю, числооо!!');
    }
}

function iss8() {
    let firstNum = prompt('Введите первое число');
    let operationSign = prompt('Ведите знак операции (+,-,*,/)');
    let secondNum = prompt('Введите второе число');
    if (!isNaN(Number(firstNum)) && !isNaN(Number(secondNum))) {
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        if (operationSign === '+') {
            alert(`Сумма чисел = ${firstNum + secondNum}`);
        }
        else if (operationSign === '-') {
            alert(`Разность чисел = ${firstNum - secondNum}`);
        }
        else if (operationSign === '*') {
            alert(`Разность чисел = ${firstNum * secondNum}`);
        }
        else if (operationSign === '/') {
            alert(`Разность чисел = ${firstNum / secondNum}`);
        }
        else {
            alert("Вы ввели неверный знак операции!");
        }
    } else {
        alert('Одно или оба числа не число!')
    }
}