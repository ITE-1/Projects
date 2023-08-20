const modalWindow = document.querySelector('.modal'),
    buttonModal = document.querySelectorAll('.btn'),
    closeModal = document.querySelector('.modal__close');
    
function showModal() {
    modalWindow.classList.add('show');
    modalWindow.classList.remove('hide');
}
function hideModal() {
    modalWindow.classList.remove('show');
    modalWindow.classList.add('hide');
}

buttonModal.forEach(button => {
    button.addEventListener('click', showModal);
})



// openModal.addEventListener('click', (e) => {
    
//         showModal();
// })
closeModal.addEventListener('click', () => {
   
        hideModal();
})
