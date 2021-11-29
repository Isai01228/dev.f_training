'use strict'

// const container = document.createElement('div')
// const h2 = document.createElement('h2')

// document.body.appendChild(container)
// container.appendChild(h2)

//EJERCICIO 1
//Crear un input de texto , al dar click a un botón se coloque en un parrafo "hola, nombre del usuario !!"
/*const input = document.querySelector('#name')
const updateNameP = document.querySelector('#updateNameP')
const getNameB = document.querySelector('#getNameB')

let userInput;

const myName = () => {
    userInput = input.value
    updateNameP.innerHTML = `<h1> ${userInput} </h1>`
}
getNameB.addEventListener('click', myName)*/

//EJERCICIO 2
//una calculadora de dos numeros que los obtenga de un input de texto o de numeros
// const input = document.querySelector('#nums')
// const okButton = document.querySelector('#getNumber')
// const p01 = document.querySelector('#sumO1')
// const p02 = document.querySelector('#restO2')
// const p03 = document.querySelector('#multO3')
// const p04 = document.querySelector('#divO4')
// const getRes = document.querySelector('#getRes')

// let userInput
// const numeros = []
// let sum = 0
// let rest = 0
// let mult = 0
// let div = 0


// const myNums = () => {
//     userInput = numeros.push(Number(input.value))
//     console.log(`Acabas de introducir: ${input.value}`)
//     onclick = input.value = ""  
// }
// const opProcess = () => {
//     for (let i = 0; i < numeros.length; i++) {
//         p01.textContent = `Tu suma es: ${sum = numeros[0] + numeros[1]}` 
//         p02.textContent = `Tu resta es: ${rest = numeros[0] - numeros[1]}`
//         p03.textContent = `Tu multiplicacion es: ${mult = numeros[0] * numeros[1]}` 
//         p04.textContent = `Tu resultado es: ${div = numeros[0] / numeros[1]}`
//     }
// }

// okButton.onclick = myNums
// getRes.onclick = opProcess


//EJERCICIO 3
//Imprimir un arrreglo de 10 elementos al derecho y al revés
// const array = ['Hola', 1, 5, 'Bulbasaur', 100, 'Amsiedad', 9, 'Gato', 'Alguna otra cosa', 10]
// console.log(array)
// console.log(array.reverse());

//EJERCICIO 4
//imprimir del uno al 100 todos los numeros impares
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }