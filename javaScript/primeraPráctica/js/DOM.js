'use strict';

const nombre = document.querySelector('.name');
const raza = document.querySelector('.raza');
const color = document.querySelector('.color');
const prritoC = document.querySelector('.prritoC');
const perro = document.querySelector('.perro');
const sound = document.querySelector('.sound');

const masacota = {
    name: 'Chems',
    racita: 'Chidita',
    colorcito: 'Amarillo con naranja bonito'
};

let = {name, racita, colorcito} = masacota

const prrito = () =>{
    nombre.textContent = `Nombre: ${name}`;
    raza.textContent = `Raza: ${racita}`;
    color.textContent = `Color: ${colorcito}`;
};

const ladrar = () => {
    alert('Me da amsiedad krnal');
};

sound.addEventListener('click', ladrar);
prritoC.addEventListener('click', prrito);

// const parrafo = document.querySelector('#parrafito');
// const boton = document.getElementById('botoncito');
// const listita = document.querySelector('#listita')

// const frutas = ['limon', 'melón', 'pera', 'manzana'];


// const btnSaludar = () => {
//     parrafo.innerHTML = '<h1>hola, soy un parrafo</h1>'
//     parrafo.textContent = '<h1>hola, soy un parrafo</h1>'
//     console.log("hola dani");
//     for (let i = 0; i < frutas.length; i++) {
//         document.write(`<li>${frutas[i]}</li>`)
//         console.log(frutas[i]);
//     }
// }

// boton.addEventListener('click', btnSaludar);

// const animal = {
//     name: 'jaguar',
//     color: 'amarillo',
//     vivo: 'true'
// };

