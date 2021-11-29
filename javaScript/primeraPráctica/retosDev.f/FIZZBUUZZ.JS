'use strict'

let resultado;
for (let index = 1; index <= 16; index++) {
    if (index%3 == 0 && index%5 == 0) {
        resultado = "FizzBuzz";
    } else {
        if (index%3 == 0) {
            resultado = "Fizz";
        }
        else if (index%5 == 0) {
            resultado = "Buzz";
        } else {
            resultado = index;
        }
    }
    document.write(index, " = ", resultado, "</br>");
}

//PSEUDOCODIGO
/*
    INICIO
    FUNCIONDIVISION
        DEFINIR numeros = [1-16]
        INICICIARFOR (let index = 1; index < 17; index++)
            INICIARIF ( numero % 5 === 0 && numero % 3 === 0) IMPRIMIR FizzBuzz
                SI NO ( numero % 5 === 0), Entonces IMPRIMIR Buzz
                SI NO ( numero % 3 === 0), Entonces IMPRIMIR Fizz
        FINFOR
    FINFUNCION
FIN

*/