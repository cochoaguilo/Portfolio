
let lang = sessionStorage.getItem('lang')


    function Lang() {
        if(!lang){
            return
        }
        if(lang == 'es'){
            selecLang.innerHTML ='Español'
            optionsContainer.innerHTML = 'English'
            selecLang.setAttribute('data-lang', 'es')
            optionsContainer.setAttribute('data-lang', 'en')
            $('.english').css('display', 'none');
            $('.español').css('display', 'inline');
         }
         if(lang == 'en'){
             
             selecLang.innerHTML = 'English'
            optionsContainer.innerHTML = 'Español'
            selecLang.setAttribute('data-lang', 'en')
            optionsContainer.setAttribute('data-lang', 'es')
             $('.english').css('display', 'inline');
             $('.español').css('display', 'none');
         }
    }
    
window.addEventListener('load', Lang)