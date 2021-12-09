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
        store.createIndex('idAccessories', 'idAccessories', {unique: true});
        store.createIndex('nameAccessories', 'nameAccessories', {unique: false});
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
    let obj = {idAccessories: 100, nameAccessories: 'Подшипник 301 ГОСТ 520-2014', price: 25.8, update: DateNow()};
    let store = getObjectStore('accessories', 'readwrite');
    let req;
    req = store.add(obj);
    req.onsuccess = function () {
        console.log("Новое комплектующее добавлено успешно!");
    };
    req.onerror = function() {
        console.error("Ошибка при добавлении комплектующего!!!", req.error);
    };
}
openDB();