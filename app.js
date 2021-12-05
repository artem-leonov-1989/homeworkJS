function iss1() {
    alert('Hello, Palmo');
}

function iss2() {
    document.getElementsByName('inputTextIss2')[0].value = 'Hello, World!';
}

function iss3() {
    console.log(document.getElementsByName('inputTextIss3')[0].value);
}

function iss4() {
    let elements = document.querySelectorAll('body > h1');
    let buffer = elements[0].innerHTML;
    elements[0].innerHTML = elements[1].innerHTML;
    elements[1].innerHTML = buffer;
}

let colorBuffer = '';

function iss5() {
    let element = document.querySelectorAll('body > p');
    if (colorBuffer === '') {
        colorBuffer = element[0].style.color;
        element[0].style.color = 'red';
    } else {
        element[0].style.color = colorBuffer;
        colorBuffer = '';
    }
}

function iss6() {
    document.getElementsByName('inputTextIss6')[0].disabled = document.getElementsByName('inputTextIss6')[0].disabled !== true;
}

function iss7_1() {
    document.getElementById('iss7-1').style.backgroundColor = 'red';
    document.getElementById('iss7-2').style.backgroundColor = 'green';
}

function iss7_2() {
    document.getElementById('iss7-2').style.backgroundColor = 'red';
    document.getElementById('iss7-1').style.backgroundColor = 'green';
}

function iss8() {
    let ul = document.getElementById('iss8_ul');
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(String(ul.children.length + 1)));
    ul.appendChild(li);
}

function iss9() {
    let element = document.getElementById('iss9Text');
    let mainDiv = document.getElementById('iss9Div');
    const list = element.value.split('\n');
    for (let i = 0; i < list.length; i++) {
        let div = document.createElement('div');
        div.innerText = `${i + 1}. ${list[i]}`;
        mainDiv.appendChild(div);
    }
}

function iss10() {
    let arr = [];
    let formObj = [];
    let userName = document.getElementById('userName');
    formObj[0] = userName;
    if (userName.value.length < 4 || userName.value.length > 20) {
        arr[0] = false;
    } else {
        if (userName.value.search('_') !== -1 || userName.value.search('/') !== -1 || userName.value.search(/\\/) !== -1 || userName.value.search(/\|/) !== -1) {
            arr[0] = false;
        }
        arr[0] = true;
    }
    let userEmail = document.getElementById('userEmail');
    formObj[1] = userEmail;
    arr[1] = !!(userEmail.value && userEmail.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/));
    let userAge = document.getElementById('userAge');
    formObj[2] = userAge;
    if (userAge.value) {
        arr[2] = !isNaN(Number(userAge.value)) && Number(userAge.value) >= 0;
    } else {
        arr[2] = false;
    }
    let pass = document.getElementById('pass');
    formObj[3] = pass;
    if (pass.value.length > 5) {
        arr[3] = pass.value.search(/\d+/) >= 0 && pass.value.search(/[A-Z]/) >= 0;
    } else {
        arr[3] = false;
    }
    let repPass = document.getElementById('repPass');
    formObj[4] = repPass;
    arr[4] = repPass.value === pass.value;
    if (arr[0] === true && arr[1] === true && arr[2] === true && arr[3] === true && arr[4] === true) {
        for (let i = 0; i < formObj.length; i++) {
            changeProperties(formObj[i], false);
            formObj[i].value = '';
        }
        document.getElementById('successfully').style.display = 'block';
    } else {
        for (let i = 0; i < formObj.length; i++) {
            changeProperties(formObj[i], !arr[i]);
        }
    }
}

function changeProperties (id, show) {
    if (show) {
        id.style.borderColor = 'red';
        document.querySelector(`[for = ${id.id}]`).style.display = 'block';
    } else {
        id.style.borderColor = 'unset';
        document.querySelector(`[for = ${id.id}]`).style.display = 'none';
    }
}

function iss11() {
    console.clear();
    let str = document.getElementsByName('input')[0];
    if (str.value) {
        if (str.value.search(/\d+/) === 0) {
            let arr = [];
            arr[0] = str.value.split('+');
            arr[1] = str.value.split('-');
            arr[2] = str.value.split('*');
            arr[3] = str.value.split('/');
            console.log(arr[0]);
            console.log(arr[1]);
            console.log(arr[2]);
            console.log(arr[3]);
            let i = 0;
            while (arr[i].length < 2) {
                i++;
            }
            if (!isNaN(Number(arr[i][0])) && !isNaN(Number(arr[i][1]))) {
                arr[i][0] = Number(arr[i][0]);
                arr[i][1] = Number(arr[i][1]);
                if (i === 0) {
                    str.value = arr[i][0] + arr[i][1];
                }
                if (i === 1) {
                    str.value = arr[i][0] - arr[i][1];
                }
                if (i === 2) {
                    str.value = arr[i][0] * arr[i][1];
                }
                if (i === 3 && arr[i][1] !== 0) {
                    str.value = arr[i][0] / arr[i][1];
                }
                if (i === 3 && arr[i][1] === 0) {
                    warning(str, 'Деление на ноль!');
                }
            } else {
                warning(str, 'Больше одной операции!');
            }
        } else {
            warning(str, 'Первый символ не цифра!');
        }
    } else {
        warning(str, 'Нечего вычислять!');
    }
}

function warning(obj, message) {
    obj.value = message;
    setTimeout(()=> obj.value = '', 1000)
}

const productList = ['Презерватив', 'Вино', 'Конфеты', 'Цветы'];

let basket = {};
let showcase = document.getElementById('showcase');
for (let i = 0; i < productList.length; i++) {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerText = productList[i];
    tr.appendChild(td);
    let tdBtn = document.createElement('td');
    let productBtn = document.createElement('button');
    productBtn.setAttribute('data-id', productList[i]);
    productBtn.addEventListener('click',function () {
        let id = productBtn.dataset.id;
        addBasket(id);
    })
    productBtn.innerText = 'Добавить';
    tdBtn.appendChild(productBtn);
    tr.appendChild(tdBtn);
    showcase.appendChild(tr);
}

function addBasket (id) {
    if (basket.hasOwnProperty(id)) {
        basket[id]++;
    } else {
        basket[id] = 1;
    }
}

let modal = document.getElementById("my_modal");
let btn = document.getElementById("btn_modal_window");
let span = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function () {
    modal.style.display = "block";
    let showBasket = document.getElementById('showBasket');
    for (let key in basket) {
        let tr = document.createElement('tr');
        let nameItem = document.createElement('td');
        let countItem = document.createElement('td');
        nameItem.innerText = key;
        countItem.innerText = basket[key];
        tr.appendChild(nameItem);
        tr.appendChild(countItem);
        showBasket.appendChild(tr);
    }
    let count = showBasket.querySelectorAll('tr').length;
    if (count > 0) {
        let clearBtn = document.createElement('button');
        clearBtn.innerText = 'Очистить корзину';
        clearBtn.onclick = function () {
            basket = {};
            modal.style.display = "none";
            while (showBasket.firstChild) {
                showBasket.removeChild(showBasket.firstChild);
            }
        }
        showBasket.appendChild(clearBtn);
    }
}

span.onclick = function () {
    modal.style.display = "none";
    let showBasket = document.getElementById('showBasket');
    while (showBasket.firstChild) {
        showBasket.removeChild(showBasket.firstChild);
    }
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}