let db;
const DB_NAME = 'warehouse';
const DB_VERSION = 1;

function openDB() {
    console.log('Получение доступа к БД...');
    let req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onsuccess = function () {
        db = req.result;
        console.log('К работе с БД готов!');
        getAllAccessories();
    }
    req.onerror = function (event) {
        console.error("При доступе к ДБ произошла ошибка:", event.target.errorCode);
    }
    req.onupgradeneeded = function (event) {
        console.log("Обновление структуры БД...");
        let storeAccessories = event.currentTarget.result.createObjectStore('accessories', { keyPath: 'id', autoIncrement: true });
        storeAccessories.createIndex('nameAccessories', 'nameAccessories', {unique: false});
    };
}

function getObjectStore(store_name, mode) {
    let tx = db.transaction(store_name, mode);
    return tx.objectStore(store_name);
}

function DateNow() {
    let now = new Date(Date.now());
    return now.toISOString();
}

function addAccessories() {
    let Obj = {nameAccessories: document.getElementById('modalInput').value, price: document.getElementById('modalInput1').value, amount: document.getElementById('modalInput2').value, updateAT: DateNow()};
    if (Obj.nameAccessories.length >= 3 && Obj.amount && Obj.price &&!isNaN(Obj.amount) && !isNaN(Obj.price) && Obj.price >= 0 && Obj.amount > 0) {
        let store = getObjectStore('accessories', 'readwrite');
        let index = store.index('nameAccessories');
        index.get(Obj.nameAccessories).onsuccess = function (event) {
            /*if (event.target.result === undefined) {*/
                console.log('Добавление нового комплектующего в БД...');
                let price = +Obj.price;
                let amount = +Obj.amount;
                Obj.price = price.toFixed(2);
                Obj.amount = amount.toFixed(3);
                addInDB('accessories', Obj);
                destroyModalWindow();
                getAllAccessories();
            /*} else {
                alert('Такое название уже существует!');
            }*/
        }
    } else {
        let alert = document.getElementsByClassName('alert')[0];
        let textError = '';
        if (Obj.nameAccessories.length < 3) {
            textError = textError + 'Название должно быть не менее 3х символов.\n';
        }
        if (!Obj.amount || Obj.amount <= 0) {
            textError = textError + 'Вы не указали количество товара или оно равно 0.\n';
        }
        if (isNaN(Obj.amount)) {
            textError = textError + 'Количество должно быть числом (десятые через точку).\n';
        }
        if (!Obj.price || Obj.price < 0) {
            textError = textError + 'Вы не указали цену товара или цена ниже 0.\n';
        }
        if (isNaN(Obj.price)) {
            textError = textError + 'Цена должна быть числом с точкой.';
        }
        alert.innerText = textError;
        alert.style.display = 'block';
    }
}

function addInDB(storeName, Obj) {
    let store = getObjectStore(storeName, 'readwrite');
    let req;
    req = store.add(Obj);
    req.onsuccess = function () {
        console.log("Новое комплектующее добавлено успешно!");
    };
    req.onerror = function () {
        console.error("Ошибка при добавлении комплектующего!!!", req.error);
    };
}

function destroyTableContent() {
    document.querySelector('#mainTable > tbody').innerHTML='';
}

function getAllAccessories () {
    destroyTableContent();
    let objStore = getObjectStore('accessories', 'readonly');
    objStore.openCursor().onsuccess = function (event) {
        let cursor = event.target.result;
        if (cursor) {
            getRowTable(cursor);
            cursor.continue();
        }
    }
}

function getRowTable(cursor) {
            let tr = document.createElement('tr');
            let thId = document.createElement('th');
            thId.setAttribute('scope', 'row');
            thId.innerText = cursor.value.id;
            let tdName = document.createElement('td');
            tdName.innerText = cursor.value.nameAccessories;
            let tdPrice = document.createElement('td');
            tdPrice.innerText = cursor.value.price;
            let tdAmount = document.createElement('td');
            tdAmount.innerText = cursor.value.amount;
            let tdSum = document.createElement('td');
            tdSum.innerText = String(cursor.value.price * (cursor.value.amount));
            let tdDel = document.createElement('td');
            let buttonDel = document.createElement('button');
            buttonDel.type = 'button';
            buttonDel.classList.add('btn');
            buttonDel.classList.add('btn-outline-danger');
            buttonDel.innerText = 'Удалить';
            buttonDel.setAttribute('onclick', `deleteItemBD(${cursor.value.id})`);
            tdDel.appendChild(buttonDel);
            tr.appendChild(thId);
            tr.appendChild(tdName);
            tr.appendChild(tdAmount);
            tr.appendChild(tdPrice);
            tr.appendChild(tdSum);
            tr.appendChild(tdDel);
            document.querySelector('#mainTable > tbody').appendChild(tr);
}

function deleteItemBD(id) {
    let req = getObjectStore('accessories', 'readwrite');
    req.delete(id);
    req.onsuccess = function (event) {
        console.log(`Позиция с id=${id} удалена!`);
    }
    req.onerror = function (event) {
        console.log('Ошибка при удаление!' , event.target.result);
    }
    getAllAccessories();
}

function searchNameInBD() {
    let str = document.getElementById('modalInput').value;
    if (str.length < 3) {
        let alert = document.getElementsByClassName('alert')[0];
        alert.innerText = 'Название должно быть не менее 3х символов.';
        alert.style.display = 'block';
    } else {
        let objStore = getObjectStore('accessories', 'readonly');
        destroyTableContent();
        destroyModalWindow();
        objStore.openCursor().onsuccess = function (event) {
            let cursor = event.target.result;
            if (cursor) {
                if (cursor.value.nameAccessories.includes(str)) {
                    getRowTable(cursor);
                }
                cursor.continue();
            }
        }
    }
}

openDB();