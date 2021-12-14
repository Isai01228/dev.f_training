'use strict'

const {obtenerUsuariosSync} = require('../usuarios/usuarios')

console.log('Inicio de programa');
console.time('inicio');

const usuario1 = obtenerUsuariosSync(12)
console.log('Usuario 1: ', usuario1)

const usuario2 = obtenerUsuariosSync(13)
console.log('Usuario 2: ', usuario2)

console.log('Fin de programa');
console.timeEnd('inicio')