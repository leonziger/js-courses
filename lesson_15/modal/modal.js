function Modal(template) {
    this.isOpen = false;
    this.template = template;
    this.closeButton = template.querySelector('.modal__close');

    this.closeButton.addEventListener('click', this.closeModal.bind(this));
}

Modal.prototype.openModal = function() {
    this.template.classList.add('modal_open');
};

Modal.prototype.closeModal = function() {
    this.template.classList.remove('modal_open');
};
