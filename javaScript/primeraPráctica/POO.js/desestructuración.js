'use strict';

const numeros = [1, 2, 3];

const [uno, dos, tres] = numeros

console.log(dos);

const persona = {
    colorDeCabello: 'cafe',
    altura: '1.82',
    saludar:  function() {
        console.log('hola!!');
    },
    edad: 18,
    nombre: "wiesse",
    apellido: "Yuval"
};

const  {nombre, edad, saludar, apellido} = persona

console.log(`${nombre} se apellida ${apellido} y tiene ${edad} años`);