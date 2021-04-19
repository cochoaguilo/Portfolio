
let modal = document.getElementById('modal'),
    openModal = document.getElementById('open-modal'),
    closeModal = document.getElementById('close-modal');

openModal.addEventListener('click', ()=>{

    modal.style.left = '0';
})

closeModal.addEventListener('click', ()=>{

    modal.style.left = '-35%';
})