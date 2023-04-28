// Links por JS
function englishVersion(){
    window.open("english-index.html", '_self')
}

function romanianVersion(){
    window.open("index-romanesc.html", '_self')
}

function sorryEnglish(){
    window.open("i'm-sorry.html", '_self')
}

function reasonsEnglish(){
    window.open(".html", '_self')
}

function missYouEnglish(){
    window.open("i'm-sorry.html", '_self')
}

// menu hamburguinho
function openMenu(){
    naveg.style.display = 'block'
}
function closeMenu(){
    naveg.style.display = 'none'
}
function clickMenu(){
    if (naveg.style.display == 'block'){
        naveg.style.display = 'none'
    } else { 
        naveg.style.display = 'block'
    }
}
function mudouTamanho(){
    if (window.innerWidth >= 768){
        naveg.style.display = 'block'
    } else {
        naveg.style.display = 'none'
    }
}