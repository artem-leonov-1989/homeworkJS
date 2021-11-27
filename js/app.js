function isNum(num) {
    return !isNaN(Number(num));
}

function iss1() {
    alert(isNum(prompt('Введите текст или строку')));
}

function emptyLine (line) {
    return !line;
}

function mean(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
        return num1;
    }
    if (num1 > num2 && num1 < num3) {
        return num1;
    }
    if (num1 < num2 && num1 > num3) {
        return num1;
    }
    if (num2 > num1 && num2 < num3) {
        return num2;
    }
    if (num2 < num1 && num2 > num3) {
        return num2;
    }
    return num3;
}

function iss2() {
    let num1 = prompt('Введите первое число');
    let num2 = prompt('Введите второе число');
    let num3 = prompt('Введите третье число');
    if (isNum(num1) && !emptyLine(num1) && isNum(num2) && !emptyLine(num2) && isNum(num3) && !emptyLine(num3)) {
        alert(mean(+num1, +num2, +num3));
    } else {
        alert('Есть поле с пустым или не числовым значением!')
    }
}