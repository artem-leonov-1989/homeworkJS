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
        let store = event.currentTarget.result.createObjectStore(
            'accessories', { keyPath: 'id', autoIncrement: true });
        store.createIndex('nameAccessories', 'nameAccessories', {unique: true});
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
    const storeName = 'accessories';
    const controlKey = 'nameAccessories';
    let Obj = {nameAccessories: document.getElementById('modalInput').value, price: document.getElementById('modalInput1').value, createAt: DateNow()};
    let store = getObjectStore(storeName, 'readonly');
    let index = store.index(controlKey);
    index.get(Obj.nameAccessories).onsuccess = function (event) {
        if (event.target.result === undefined) {
            console.log('Добавление нового комплектующего в БД...');
            addInDB(storeName, Obj);
        } else {
            alert('Такое название уже существует в справочнике БД!');
        }
    }
}

function addInDB(storeName, Obj) {
    let store = getObjectStore(storeName, 'readwrite');
    let req;
    req = store.add(Obj);
    req.onsuccess = function () {
        console.log("Новое комплектующее добавлено успешно!");
    };
    req.onerror = function() {
        console.error("Ошибка при добавлении комплектующего!!!", req.error);
    };
}
openDB();