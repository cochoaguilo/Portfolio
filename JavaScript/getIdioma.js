
let lang = sessionStorage.getItem('lang')


    function Lang() {
        if(!lang){
            return
        }
        if(lang == 'es'){
            selecLang.lastElementChild.textContent = 'Español'
            optionsContainer.lastElementChild.textContent = 'English'
            changeFLag.setAttribute('src', '../Portfolio/Images/claudita-Flag-of-Spain.svg')
            optionsContainer.firstElementChild.setAttribute('src', '../Portfolio/Images/UK-union-flag.svg')
            selecLang.setAttribute('data-lang', 'es')
            $('.english').css('display', 'none');
            $('.español').css('display', 'block');
         }
         if(lang == 'en'){
             
            selecLang.lastElementChild.textContent = 'English'
            optionsContainer.lastElementChild.textContent = 'Español'
            selecLang.setAttribute('data-lang', 'en')
            changeFLag.setAttribute('src','../Portfolio/Images/UK-union-flag.svg');
            optionsContainer.firstElementChild.setAttribute("src", "../Portfolio/Images/claudita-Flag-of-Spain.svg")
             $('.english').css('display', 'block');
             $('.español').css('display', 'none');
         }
    }
    
window.addEventListener('load', Lang)