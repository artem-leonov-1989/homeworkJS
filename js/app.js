// Все основные функции по заданию имеют имя iss#. Остальные - вспомогательные
function isNum(num) {
    return !isNaN(num);
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
    const num1 = +prompt('Введите первое число');
    const num2 = +prompt('Введите второе число');
    const num3 = +prompt('Введите третье число');
    if (isNum(num1) && !emptyLine(num1) && isNum(num2) && !emptyLine(num2) && isNum(num3) && !emptyLine(num3)) {
        alert(mean(num1, num2, num3));
    } else {
        alert('Есть поле с пустым или не числовым значением!')
    }
}

function existsProperty (Obj) {
    for (let key in Obj) {
        if (key === 'name') {
            return true;
        }
    }
    return false;
}

function iss3() {
    const user = {name: 'Artem', age: 32};
    alert(existsProperty(user));
}

function sayNameUser (Obj) {
    return `${Obj['name']} ${Obj['username']}`;
}

function iss4() {
    const user = {name: 'Артем', username: 'Леонов'};
    alert(sayNameUser(user));
}

function sumAllProperty(Obj) {
    let sum = 0;
    for (let key in Obj) {
         sum = sum + Obj[key];
    }
    return sum;
}

function iss5() {
    const Obj = {name1: 200, name2: 500, name3: 400};
    alert(sumAllProperty(Obj));
}

function editObj(Obj) {
    for (let key in Obj) {
        if (typeof (Obj[key]) === 'number') {
            if (!isFinite(Obj[key])) { //Отсеиваем NaN и Infinity
                delete Obj[key];
            } else {
                Obj[key] = roundDiv(Obj[key]);
            }
        }
        if (typeof (Obj[key]) === 'string') {
            if (isFinite(Obj[key])) { // Ловим стринговые значения, содержащие только число.
                Obj[key] = Number(Obj[key]);
                Obj[key] = roundDiv(Obj[key]);
            } else {
                Obj[key] = "Hello, Palmo";
            }
        }
        if (typeof (Obj[key]) !== 'number' && typeof (Obj[key]) !== 'string') {
            delete Obj[key];
        }
    }
    return Obj;
}

function roundDiv(num) {
    num = num / 2 ;
    if (!Number.isInteger(num)) {
        num = Math.round(num);
    }
    return num;
}

function iss6() {
    console.clear();
    const Obj = {name: 'Artem', surname: 'Leonov', age: 32, weight: NaN, height:'182.5', admin: false, politicalViews: Infinity, wage: 7221.51};
    for (let key in editObj(Obj)) {
        console.log(`${key} - ${Obj[key]}`);
    }
}