'use strict';
const texto = document.querySelector('#texto');
const parrafo = document.querySelector('#parrafo');
const boton = document.querySelector('#botón');

const getText = () => {
    let textito = texto.value
    parrafo.textContent = textito
}

boton.addEventListener('click', getText)