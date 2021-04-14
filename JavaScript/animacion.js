let flecha1 = document.getElementById('flecha'),
    parrafo1 = document.getElementById('parrafo1'),
    flecha2 = document.getElementById('flecha2'),
    parrafo2 = document.getElementById('parrafo2');

flecha1.addEventListener('click',()=>{
    animateFlecha(parrafo1, flecha1)
})

flecha2.addEventListener('click',()=>{
    animateFlecha(parrafo2, flecha2)
})

//funcion que anima segun el parrafo y la flecha
function animateFlecha(parrafo, flecha) {
    
   
    parrafo.classList.toggle('parrafo')
    
    flecha.classList.toggle('flecha-alreves')
}

