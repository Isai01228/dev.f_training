'use strict'

//Quiero seleccionar desde Js el input de  texto
const titulo = document.querySelector('#titulo')
const inpText = document.querySelector('#InText')

inpText.addEventListener('input', (e) => {
    console.log(e);
})

titulo.addEventListener('mouseover', () => {
    titulo.classList.add('texto-azul')
    // titulo.classList.add('texto-rojo')
})

/**
    Pedir al usuario por un input de texto dos números y que imprima cúal es el mayor.

    - Pedir una frase por un input e imprimir cuantas vececes aparece en esa frase la letra a
    -Crear un conversor de grados:
    Fahrenheit a Celsius
    Celsius a Kelvin
    Kelvin a Fahrenheit
*/