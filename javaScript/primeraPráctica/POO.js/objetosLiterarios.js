'use strict';

const humano = {
    colorDeCabello: 'cafe',
    altura: '1.82',
    saludar:  function() {
        console.log('hola!!');
    }
};

console.log(humano['colorDeCabello']);


let nombre2 = 'Juanito', apellido2 = 'Martinez', edad2 = 24

let persona = {
    nombre2: nombre2,
    apellido2: apellido2,
    edad2,
}

console.log(persona.nombre2);