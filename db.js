let db;
let openRequest = indexedDB.open("test_v2", 1);

openRequest.onupgradeneeded = function (e) {
    console.log("running onupgradeneeded");
    let thisDB = e.target.result;

    if (!thisDB.objectStoreNames.contains("people")) {
        thisDB.createObjectStore("people");
    }

}

openRequest.onsuccess = function (e) {
    console.log("Success!");
    db = e.target.result;
}

openRequest.onerror = function (e) {
    console.log("Error");
    console.dir(e);
}
console.log(db);


function addPerson(e) {
    let name = "Artem";
    let email = "Leonov";

    console.log("About to add "+name+"/"+email);

    let transaction = db.transaction(["people"],"readwrite");
    let store = transaction.objectStore("people");

    //Define a person
    let person = {
        name:name,
        email:email,
        created:new Date()
    }

    //Perform the add
    let request = store.add(person,1);

    request.onerror = function(e) {
        console.log("Error",e.target.error.name);
        //some type of error handler
    }

    request.onsuccess = function(e) {
        console.log("Woot! Did it");
    }
}

addPerson();