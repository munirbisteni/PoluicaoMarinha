let slide = window.document.querySelector('#textoSlide');
let anim = window.document.querySelector('.slider')
let vol = document.getElementById('player')
let cont = 0;
vol.volume=0.05;
anim.addEventListener("animationiteration", event =>{
    if (event.animationName === "fade"){

        if (cont == 0){
        slide.innerHTML='Diversos selos de proteção animal se mostram imprecisos.'
        cont++;
        }
        else if (cont == 1){
            slide.innerHTML="Até 85% do oxigênio que respiramos vem dos nossos mares."
            cont++;
        }
        else if (cont == 2){
            slide.innerHTML="Menos de 1% de nossos oceanos globais são protegidos da pesca comercial."
            cont++;
        }
        else if (cont == 3){
            slide.innerHTML="até 2050 haverá mais plástico nos oceanos do que peixes."
            cont= 0;
        }   
    }
});