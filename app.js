function showObj (Obj) {
    Obj.style.display = 'block';
}

function putAwayObj (Obj) {
    Obj.style.display = 'none';
}

function createModalWindow() {
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

    modal.appendChild(modalWindow);
    return modal;
}

function addObj(Obj) {
    document.body.appendChild(Obj);
}

function showModalWindow() {
    let window = createModalWindow()
    addObj(window);
}