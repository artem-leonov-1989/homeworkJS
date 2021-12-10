function addItemForm() {
    createModalWindow('Добавление новой позиции.', ['Название комплектующего', 'Цена за единицу товара', 'Количество'], 'Принять на склад', 'addAccessories()');
}

function createModalWindow(headerText, placeholder, textButton, nameFunction) {
    const htmlCode = "<div class=\"modal-dialog\">\n" +
        "<div class=\"modal-content\">\n" +
        "<div class=\"modal-header\">\n" +
        "<h5 class=\"modal-title\"></h5>\n" +
        "<button type=\"button\" class=\"btn-close\" onclick=\"destroyModalWindow()\"></button>\n" +
        "</div>\n" +
        "<div class=\"modal-body\">\n" +
        "<input type=\"text\" id=\"modalInput\" class=\"form-control\">" +
        "</div>\n" +
        "<div class=\"modal-footer\">\n" +
        "<button type=\"button\" class=\"btn btn-primary\"></button>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>\n";
    let modalWindow = document.createElement('div');
    modalWindow.classList.add('modal');
    modalWindow.id = 'staticBackdrop';
    modalWindow.setAttribute('tabindex', '-1');
    modalWindow.innerHTML = htmlCode;
    document.body.appendChild(modalWindow);
    document.getElementsByClassName('modal-title')[0].textContent = headerText;
    let button = document.querySelector('.modal-footer > button');
    button.textContent = textButton;
    button.setAttribute('onclick', nameFunction);
    if (typeof(placeholder) === 'object') {
        document.getElementById('modalInput').setAttribute('placeholder', placeholder[0]);
        for (let i = 1; i < placeholder.length; i++) {
            let input = document.createElement('input');
            input.type = 'text';
            input.classList.add('form-control');
            input.setAttribute('placeholder', placeholder[i]);
            input.id = `modalInput${i}`;
            document.querySelector('.modal-body').appendChild(input);
        }
    } else {
        document.getElementById('modalInput').setAttribute('placeholder', placeholder);
    }
    let error = document.createElement('div');
    error.classList.add('alert');
    error.classList.add('alert-danger');
    error.setAttribute('role', 'alert');
    error.style.display ='none';
    document.getElementsByClassName('modal-body')[0].appendChild(error);
}

function destroyModalWindow() {
    document.getElementsByClassName('modal')[0].remove();
}