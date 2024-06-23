'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// multiple query selector

const btnsOpenModal = document.querySelectorAll('.show-modal');

for(let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', function() {
    console.log('button clicked');
    //classlist removed
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    });
}
//DRY PRINCIPLES
const closeModal = () => {
modal.classList.add('hidden');
overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


