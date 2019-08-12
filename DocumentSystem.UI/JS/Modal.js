export default class Modal {
    constructor() {
        this.content = null;
    }

    Build() {
        let modalBackdrop = document.createElement('div');
        let modalContainer = document.createElement('div');
        let closeModal = document.createElement('button');

        modalContainer.classList.add('card');
        modalBackdrop.classList.add('modalBackdrop');

        closeModal.classList.add('closeModal', 'close');
        closeModal.setAttribute('aria-label', 'Close');
        closeModal.innerHTML = `<span aria-hidden="true">&times;</span>`;

        modalContainer.appendChild(closeModal);
        modalBackdrop.appendChild(modalContainer);

        closeModal.addEventListener('click', () => {
            modalBackdrop.classList.remove('visible');
        })

        modalContainer.appendChild(this.content);

        return modalBackdrop;
    }

    SetContent(el) {
        this.content = el;
    }
}