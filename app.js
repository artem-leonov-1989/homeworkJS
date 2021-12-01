function iss1() {
    let str = prompt('Введите строку');
    alert(upFirst(str));
}

function upFirst(str) {
    str = str.toLowerCase();
    let firstSymbol = str[0];
    firstSymbol = firstSymbol.toUpperCase();
    str = firstSymbol + str.slice(1, str.length);
    return str;
}

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        str = str.slice(0, maxlength - 3) + '...';
    }
    return str;
}

function iss2() {
    let str = prompt('Введите строку');
    alert(truncate(str, 10));
}

function getShortName(fio) {
    let arr = fio.split(' ');
    arr[1] = arr[1][0];
    arr[2] = arr[2][0];
    return `${arr[0]} ${arr[1]}. ${arr[2]}.`;
}

function iss3() {
    let str = prompt('Введите строку');
    alert(getShortName(str));
}

function iss4() {
    const users = [
        {
            id: 1,
            name: 'John',
            age: 20
        },
        {
            id: 4,
            age: 30
        },
        {
            id: 2,
            name: 'Marry',
            age: 22
        },
        {
            id: 3,
            name: 'Poll',
            age: 25
        },
    ]
    console.log(delNoEmptyName(users));
}

function delNoEmptyName(arrObj) {
    return  arrObj.filter(function(user) {
        return user.name;
    });
}

function iss5() {
    const arr1 = [1, 'Вася', '5', true, 1];
    const arr2 = [true, 'Вася', 5, 'home'];
    console.log(arrUnion(arr1, arr2));
}

function arrUnion(arr1, arr2) {
    let arr = [];
    for (let element of arr1) {
        if (arr.indexOf(element) < 0) {
            arr.push(element);
        }
    }
    for (let element of arr2) {
        if (arr.indexOf(element) < 0) {
            arr.push(element);
        }
    }
    return arr;
}