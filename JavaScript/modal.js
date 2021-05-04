
let modal = document.getElementById('modal'),
    openModal = document.getElementById('open-modal'),
    closeModal = document.getElementById('close-modal');

openModal.addEventListener('click', ()=>{
    if(window.innerWidth < 700){
        modal.style.left = '6%'
    }else{
        modal.style.left = '0';
    }
    
})

closeModal.addEventListener('click', ()=>{
    if(window.innerWidth < 700){
        modal.style.left = '-90%'
    }else{
        modal.style.left = '-35%';
    }
    
})