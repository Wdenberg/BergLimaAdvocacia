
//Função do Menu Mobile
function menuToggle() {
    if (document.getElementById('abrir-menu').style.display == 'none') {
        document.getElementById('abrir-menu').style.display = 'flex';
    }else {
        document.getElementById('abrir-menu').style.display = 'none';
    }
   
}

// Função do Contato
const url ="https://api.whatsapp.com/send?phone=5581979144289"
const btn = document.querySelector("#bnt")

function contac(url){
    const win = window.open(url, '_blank');
    win.focus()
}
btn.addEventListener('click', () =>{
    contac(url)
})


const URL = "https://portifolio-wdenberg.vercel.app/";
const butt = document.querySelector("#bgg")

function dev(URL){
    const wi = window.open(URL, '_blank');
    wi.focus()
}

butt.addEventListener('click', () =>{
    dev(URL)
})



$(document).ready(function(){


    // typing text animation script
    var typed = new Typed(".typing",{
        strings: ["Assessoria", "Análise Juridica", "DPVAT"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
  
});
