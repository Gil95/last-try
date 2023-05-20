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

function translation(){
    window.open("translation.html", '_self')
}

function studying(){
    window.open("studying.html", '_self')
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

function traducere(){
    window.open("traducere.html", '_self')
}

function studiu(){
    window.open("studiu.html", '_self')
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

// lang alert 

var lang = document.getElementsByTagName('html')[0].getAttribute('lang');

if (lang == "ro") {
    window.alert("Nu am vrut sa te deranjez mergand din nou dupa tine, dar am vrut sa ma bucur de ceva timp alaturi de tine, tocmai pentru ca astazi am timp de petrecut cu tine.")
    window.alert("Nu pot să-ți urez studii bune și un test bun?")
} else if (lang =="en") {
    window.alert("I didn't want to bother him by going after you again, but I wanted to enjoy some time with you, precisely because today I have time to spend with you.")
    window.alert(" I can't wish you good studies and a good test?")
}
