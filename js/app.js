function isNum(num) {
    return !isNaN(Number(num));
}

function iss1() {
    alert(isNum(prompt('Введите текст или строку')));
}