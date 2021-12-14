'use strict'

const {obtenerUsuariosAsync} = require ('../usuarios/usuarios.js')

console.log('Inicio de programa')
console.time('inicio')
obtenerUsuariosAsync(1, (usuario) => {
    console.log('Usuario 1: ', usuario);
})

obtenerUsuariosAsync(2, (usuario) => {
    console.log('Usuario 2: ', usuario);
    console.timeEnd('inicio');
})

console.log('Fin de programa');