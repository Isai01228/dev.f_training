// EJERCICIO 1
// Ingresar 5 valores enteros separados por comas y con un console log o document.write mostrar los datos ordenados de mayor a menor y también de menor a mayor
// const datos = [ 100, 3, 23, 1, 2, 95, 75];
// document.write(`${datos.sort()} - ${datos.reverse()}`);

// EJERCICIO 2
// Concatenar dos arreglos agregados por el usuario y mostrarlos con un console log o document.write 
const btn1 = document.querySelector(".btnI1");
const btn2 = document.querySelector(".btnI2");
const btn3 = document.querySelector(".btnC_A");

const array1 = [];
const array2 = [];
var userInput1;
var userInput2;

const bag1 = () => {
    while (!(userInput1 == "")) {
        userInput1 = prompt('Guarda cualquier cosa !!');
        array1.push(userInput1);
        };
        console.log (`En tu primer inventario hay: ${array1}`);
};

const bag2 = () => {
    while (!(userInput2 == "")) {
        userInput2 = prompt('Guarda cualquier cosa !!');
        array2.push(userInput2);
        };
        console.log (`En tu segundo inventario hay: ${array2}`);
};

const concatArray = () => {
    const fullInventary =  array1.concat(array2);
    document.write(`Tu inventario completo es: ${fullInventary}`);
};

btn1.addEventListener("click", bag1);
btn2.addEventListener("click", bag2);
btn3.addEventListener("click", concatArray);

//EJERCICIO 3
// Crear un arreglo de palabras con información agregada por un usuario Número de palabras, primera palabra, última palabra, las palabras colocadas en orden inverso
// const array = [];
// var userInput = prompt("Escribe un texto krnal");

// array.push(userInput.split(" "));

// console.log(array);

// EJERCICIO 4
// Escribe un loop con for que dado un número entero n, retorne un array con todos los números enteros de 1 a n.
var userInput = prompt("Por favor escribe un número")

if (userInput === "") {
    console.log("no te sabes los numeros krnal");
}else{
    for (let i = 1; i <= userInput; i++) {
        
    }
}



// Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario en un prompt.
// Realizar la suma de todos los números entre N y M donde N y M los ingresa un usuario.
// Realizar la sumatoria de los primeros N números, donde N es ingresado por el usuario.