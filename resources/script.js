const btnRigth = window.document.querySelector('.button-arrow.-right');
const btnLeft = window.document.querySelector('.button-arrow.-left');
const elements = window.document.querySelector('.elements');
const about = window.document.querySelector('#abouts');

const openModalButton = document.querySelector('#open-modal');
const closeModalButton = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');

let pixels = 50;

btnRigth.addEventListener('click', function(){
    pixels = pixels+50;
    elements.style = 'transform: translateX('+pixels+'px)';
});
btnLeft.addEventListener('click', function(){
    pixels = pixels-50;
    elements.style = 'transform: translateX('+pixels+'px)';
});


const toglemodal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}

[openModalButton, closeModalButton, fade].forEach((el) => { 
    el.addEventListener("click", () => toglemodal());
});