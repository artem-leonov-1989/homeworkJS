let db;
const DB_NAME = 'warehouse';
const DB_VERSION = 1;

function openDB() {
    console.log('Получение доступа к БД...');
    let req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onsuccess = function () {
        db = req.result;
        console.log('К работе с БД готов!');
    }
    req.onerror = function (event) {
        console.error("При доступе к ДБ произошла ошибка:", event.target.errorCode);
    }
    req.onupgradeneeded = function (event) {
        console.log("Обновление структуры БД...");
        let storeAccessories = event.currentTarget.result.createObjectStore('accessories', { keyPath: 'id', autoIncrement: true });
        storeAccessories.createIndex('nameAccessories', 'nameAccessories', {unique: true});
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
    if (Obj.nameAccessories.length >= 3 && Obj.amount && Obj.price &&!isNaN(Obj.amount) && !isNaN(Obj.price)) {
        let store = getObjectStore('accessories', 'readwrite');
        let index = store.index('nameAccessories');
        index.get(Obj.nameAccessories).onsuccess = function (event) {
            if (event.target.result === undefined) {
                console.log('Добавление нового комплектующего в БД...');
                addInDB('accessories', Obj);
                destroyModalWindow();
            } else {
                alert('Такое название уже существует!');
            }
        }
    } else {
        let alert = document.getElementsByClassName('alert')[0];
        let textError = '';
        if (Obj.nameAccessories.length < 3) {
            textError = textError + 'Название должно быть не менее 3х символов.\n';
        }
        if (!Obj.amount) {
            textError = textError + 'Вы не указали количество товара.\n';
        }
        if (isNaN(Obj.amount)) {
            textError = textError + 'Количество должно быть числом (десятые через точку).\n';
        }
        if (!Obj.price) {
            textError = textError + 'Вы не указали цену товара.\n';
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
openDB();