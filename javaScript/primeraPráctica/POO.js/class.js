'use strict';

class Animal {
    //Función que se ejecuta en el momento en el que se crea un objeto
    constructor (nombre, color, sonido) {
        //atributos del prototipo
        this.nombre = nombre
        this.color = color
        this.sonido = sonido
    }
    saludar () {
        return `hola, soy un ${this.nombre}`
    }
}

//HERENCIA

class Jirafa extends Animal {
    constructor(nombre, color, sonido, tam,) {
        super(nombre, color, sonido)
        this.tam = tam
    }
}

const jirafaAlbina = new Jirafa ('Walter', 'White', 'i´m the law, crak', '12m')
console.log(jirafaAlbina.saludar());

const gato = new Animal ('gato egipcio', 'rosita', 'te odio')
console.log(gato.saludar());

const perro = new Animal ('Chihuahua', 'cafecito', 'guaw')
const {nombre} = perro

console.log(`${nombre}. ${perro.saludar()}`);

/*
Abstracción de refiere a cuando el programador hace un analisis de cuales son las características mínimas y fundamentales que tiene que tener un molde/prototipo. Para que eventualmente los programadores
*/