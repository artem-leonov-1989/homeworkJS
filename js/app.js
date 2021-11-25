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

function iss9() {
    alert('Вас приветствует казино "Рай для лоха"!');
    let bid = prompt('Введите сумму, которую вы готовы поставить! (копейки указывать после точки)');
    let startRange = prompt('Введите цифру начала диапазона');
    let endRange = prompt('Введите цифру конца диапазона');
    if (!isNaN(Number(bid)) && !isNaN(Number(startRange)) && !isNaN(Number(endRange)) && bid && startRange && endRange) {
        bid = Number(bid);
        startRange = Number(startRange);
        endRange = Number(endRange);
        if (startRange < endRange) {
            let win = bid + (endRange - startRange) * 0.1;
            alert(`Ваш возможный выигрыш может составить ${win.toFixed(2)} UAH`);
            let numBid = prompt('Введите число из заданного Вами диапазона на которое делаете ставку');
            if (numBid && !isNaN(Number(numBid))) {
                numBid = Number(numBid);
                if (numBid >= startRange && numBid <= endRange) {
                    let res = Number(getRandomInRange(startRange, endRange));
                    let resMessage = `Результат лотереи (Ваша ставка - ${numBid} Выпало - ${res}). Вы `;
                    if (numBid === res) {
                        alert(resMessage + `выиграли ${win.toFixed(2)} UAH`);
                    } else {
                        alert(resMessage + `проиграли ${bid.toFixed(2)} UAH`);
                    }
                } else {
                    alert('Число не находится в заданном Вами диапазоне!');
                }
            } else {
                alert('Поле пустое или не числовое!');
            }
        } else {
            alert('Значение конца диапазона должно быть больше значения начала диапазона!');
        }
    } else {
        alert('Что-то введено не верно или не введено вообще');
    }
}

function iss10() {
    let userChoice = prompt('Введите один из вариантов (Камень, Ножницы, Бумага)');
    if (userChoice) {
        if (userChoice === 'Камень' || userChoice === 'Ножницы' || userChoice === 'Бумага') {
            /* Условные обозначения вариантов:
            1-Камень, 2-Ножницы, 3-Бумага */
            let res = getRandomInRange(1, 3);
            if (res === 1) {
                alert('Мой вариант - Камень');
            }
            if (res === 2) {
                alert('Мой вариант - Ножницы');
            }
            if (res === 3) {
                alert('Мой вариант - Бумага');
            }
            if (userChoice === 'Камень' && res === 1) {
                alert('Ничья!');
            }
            if (userChoice === 'Камень' && res === 2) {
                alert('Вы поделили!');
            }
            if (userChoice === 'Камень' && res === 3) {
                alert('Вы проиграли!');
            }
            if (userChoice === 'Ножницы' && res === 1) {
                alert('Вы проиграли!');
            }
            if (userChoice === 'Ножницы' && res === 2) {
                alert('Ничья!');
            }
            if (userChoice === 'Ножницы' && res === 3) {
                alert('Вы поделили!');
            }
            if (userChoice === 'Бумага' && res === 1) {
                alert('Вы поделили!');
            }
            if (userChoice === 'Бумага' && res === 2) {
                alert('Вы проиграли!');
            }
            if (userChoice === 'Бумага' && res === 3) {
                alert('Ничья!');
            }
        } else {
            alert('Вы неверно написали один из вариантов');
        }
    } else {
        alert('Вы ничего не написали');
    }
}

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}