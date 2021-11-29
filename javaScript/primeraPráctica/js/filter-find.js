'use strict'

const vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria', 'Nabo']

const usuarios = [{
    nombre: 'Marco',
    país: 'Colombia'
},{
    nombre: 'Wesse',
    país: 'México'
},{
    nombre: 'Aketzali',
    país: 'Brasil'
}
]

const usuario = usuarios.find(usuario => usuario.nombre === 'Aketzali')
console.log(usuario);

const vegetalEncontrado = vegetales.find(vegetal => vegetal === 'Nabo')
const vegetalesEncontrados = vegetales.filter(vegetal => vegetal === 'Nabo')


console.log(`Vegetal encontrado: ${vegetalEncontrado}`);
console.log(`Vegetales encontrados: ${vegetalesEncontrados}`);