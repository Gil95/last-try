// Links por JS em inglês
function englishVersion(){
    window.open("english-index.html", '_self')
}

function sorryEnglish(){
    window.open("i'm-sorry.html", '_self')
}

function reasonsEnglish(){
    window.open("10-reasons.html", '_self')
}

function missYouEnglish(){
    window.open("miss-you.html", '_self')
}

//links por JS em Romeno
function romanianVersion(){
    window.open("index-romanesc.html", '_self')
}

function scuzeRomana(){
    window.open("îmi-pare-rău.html", '_self')
}

function motiveRomana(){
    window.open("10-motive.html", '_self')
}

function mieDorDeTineRomana(){
    window.open("mi-e-dor-de-tine.html", '_self')
}

// menu hamburguinho
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