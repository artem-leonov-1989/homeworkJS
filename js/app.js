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

function iss7() {
    alert('Добро пожаловать в игру - Викторина. В поле ответе писать только число соответсвующее варианту ответа.');
    const quiz = {
        question1: 'Кто из президентов США написал свой собственный рассказ про Шерлока Холмса?',
        question2: 'Какую пошлину ввели в XII  веке в Англии для того чтобы заставить мужчин пойти на войну?',
        question3: 'Откуда пошло выражение «деньги не пахнут?',
        question4: 'Туристы, приезжающие на Майорку, обязаны заплатить налог…',
        question5: 'Основой для «Сказки о рыбаке и рыбке Пушкина послужила сказка братьев Гримм «Рыбак и его жена». В ней немецкая «коллега» нашей старухи превратилась в:',
        question6: 'Найдите ошибку в отрывке из басни Крылова: «Попрыгунья Стрекоза лето красное пропела; оглянуться не успела, как зима катит в глаза».',
        question7: 'Кто из знаменитых художников за жизнь продал всего одну картину?',
        question8: 'Один известный писатель рассказывал, что списал образ старушки-вредины со своей бывшей жены. При этом бабулька оказалась удивительно похожей на Коко Шанель. На голове у нее всегда была шляпка со складной тульей, благодаря которой она и получила прозвище.',
        question9: 'У индейцев из немногочисленного североамериканского племени квакиутл есть традиция: беря деньги в долг, они оставляют в залог…',
        question10: 'Быки реагируют на красный цвет?'
    }
    const answerOptions = {
        question1: '1. Джон Кеннеди\n 2. Франклин Рузвельт\n 3. Рональд Рейган',
        question2: '1. Налог на тунеядство\n 2. Налог на трусость\n 3. Налог на отсутствие сапог',
        question3: '1. От подателей за провоз парфюмерии\n 2. От сборов за нестиранные носки\n 3. От налога на туалеты',
        question4: '1. На плавки\n 2. На пальмы.\n 3. На солнце',
        question5: '1. Папу Римского\n 2. Королеву\n 3. Директора рыбзавода\n 4. Командира отряда водолазов',
        question6: '1. Стрекозы не умеют прыгать\n 2. Эти насекомые совсем не издают звуков\n 3. Зимы в тех местах, о которых писал Крылов, нет\n 4. Здесь нет ошибки, все правильно',
        question7: '1. Винсент Ван Гог Б.\n 2. Пьер Огюст Ренуар',
        question8: '1. Шапокляк\n 2. Красная Шапочка\n 3. Мадам Баттерфляй',
        question9: '1. Душу\n 2. Имя\n 3. Скальп тещи\n 4. Амулет',
        question10: '1. Да\n 2. Нет'
    }

    const correctAnswer = {
        question1: 2,
        question2: 2,
        question3: 3,
        question4: 3,
        question5: 1,
        question6: 2,
        question7: 1,
        question8: 1,
        question9: 2,
        question10: 2
    }

    let userResponses = {}

    for (let key in quiz) {
        userResponses[key] = +prompt(`${quiz[key]} \n ${answerOptions[key]}`)
        if (isNum(userResponses[key]) && !emptyLine(userResponses[key])) {
            
        } else {
            alert('Поле пустое или не содержит число!')
            return;
        }
    }
    const scores = quizResult(correctAnswer, userResponses);
    let correctWriting = 'баллов';
    if (scores === 1 ) {
        correctWriting = 'балл';
    }
    if (scores >= 2 && scores <= 4) {
        correctWriting = 'балла';
    }
    alert(`Вы получили - ${quizResult(correctAnswer, userResponses)} ${correctWriting}.`)
}

function quizResult(corrAns, userResp) {
    let result = 0;
    for (let key in corrAns) {
        if (corrAns[key] === userResp[key]) {
            result++;
        }
    }
    return result;
}