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