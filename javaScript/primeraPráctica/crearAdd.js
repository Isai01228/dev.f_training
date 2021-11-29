'use strict'
/*
//Nos va ayudar a crear un elemento de HTML. Más no lo va a añadir, se va a quedar indicado
let variable = document.createElement('h1')

//Esto es para añadir texto plano
document.createTextNode('Texto')
//Esto es para añadir contenido de texto a mis etiquetas padre
document.textContent = 'fsdfsfa'

//Agrega "un" hijo. Ambos métodos append, van a agregar un elemento al final de las estructuras del padre
ElementoPadre.appendChild(variable)

//Fucion más robusta que nos ayuda a permitir agregar más de un nodo y también un texto
ElementoPadre.append(variable)

document,insertBefore(nodoQueQuierAgregar, referencia)
*/

const container = document.querySelector('.cont')
const h3 = document.createElement('h3')
const texto = document.createTextNode('Holaaaa!!')

container.appendChild(h3)
h3.appendChild(texto)

container.append('holaaaa again', document.createElement('p'))

const titulo = document.createElement('h1')
titulo.textContent = 'soy el master'

const referencia = document.querySelector('h2')

container.insertBefore(titulo, referencia)