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
    if (document.getElementsByName('inputTextIss6')[0].disabled === true) {
        document.getElementsByName('inputTextIss6')[0].disabled = false;
    } else {
        document.getElementsByName('inputTextIss6')[0].disabled = true;
    }
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