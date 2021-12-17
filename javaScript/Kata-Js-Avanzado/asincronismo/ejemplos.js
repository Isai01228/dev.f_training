// INICIO DE PRIMER EJEMPLO
/*
console.log('-- SIMULACION DE CUELLO DE BOTELLABOTELLA --')
console.log(1)
setTimeout(() => {
    return console.log(2);
}, 2000)
for (let i = 0; i < 999; i++);
console.log(3);*/
// FIN DE PRIMER EJEMPLO

// Crear una función que reciba como
// argumento una variable de cualquier tipo y un callback. 
// La función debe retornar como resultado, mediante el callback, 
// cual es el tipo de dato de la variable ingresada e imprimir su contenido.

const buildVar = (variable) => {
    console.log(typeof(variable))
}

const argumentFunction = (vars, callback) => {
}

const nombre = 'Daniel'
const num = 3

buildVar(num)

// Crear una función que reciba como 
// argumentos, dos números y un callback. Según el callback
// que se pase a la función, se devuelve la suma de los
// dos números, la resta de los dos números o la
// multiplicación de los dos números.

// Escribe una función que reciba una cadena de
// caracteres y debe devolver, mediante un callback, la
// cadena de caracteres en mayúsculas o en minúsculas.
// -> pejelagarto
// -> PEJELAGARTO
// touppercase
// tolowercase