function showObj (Obj) {
    Obj.style.display = 'block';
}

function putAwayObj (Obj) {
    Obj.style.display = 'none';
}

function defaultFunction () {
    alert('Операция успешна!');
}

function createModalWindow(header = 'Хз', nameInput='inputUserStr', textButton = 'Выполнить') {
    let modal = document.createElement('div');
    modal.classList.add('modal');
    let modalWindow = document.createElement('div');
    modalWindow.classList.add('modalWindow');
    let modalClose = document.createElement('div');
    modalClose.classList.add('modalClose');
    modalClose.classList.add('flex');
    let closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.innerText = 'X';
    closeButton.addEventListener('click', function () {
        document.getElementsByClassName('modal')[0].remove();
    })
    modalClose.appendChild(closeButton);
    modalWindow.appendChild(modalClose);
    let modalHeader = document.createElement('div');
    modalHeader.classList.add('modalHeader');
    modalHeader.classList.add('text-center');
    modalHeader.innerText = header;
    modalWindow.appendChild(modalHeader);
    let modalContent = document.createElement('div');
    modalContent.classList.add('flex');
    modalContent.classList.add('flex-column');
    modalContent.classList.add('modalContent');
    let input = document.createElement('input');
    input.type = 'text';
    input.name = nameInput;
    modalContent.appendChild(input);
    let button = document.createElement('button');
    button.type = 'button';
    button.id = 'modalContentButton';
    button.innerText = textButton;
    modalContent.appendChild(button);
    modalWindow.appendChild(modalContent);
    modal.appendChild(modalWindow);
    return modal;
}

function addNewItemWindow() {
    const header = 'Добавление нового материала';
    const nameInput = 'newNameItem';
    const textButton = 'Сохранить';
    let window = createModalWindow(header, nameInput, textButton);
    document.body.appendChild(window);
}