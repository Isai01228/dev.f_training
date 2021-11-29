'use strict'

class Animal  {
    constructor(nombre, color){
        this.nombre = nombre
        this.color = color
    }
    saludo () {
        return `hola. Inserte ruidito chidito`
    }
}

class Perro extends Animal {
    constructor(nombre, color, cabellitos, raza){
        super(nombre, color)
        this.cabellitos = cabellitos
        this.raza = raza
    }
    saludo () {
        return `hola, mi nombre es ${this.nombre}`
    }
}

//Instanciar mis prototipos

const bestia = new Perro('Lobito', 'blanco', 'true', 'lobo')
const {nombre} = bestia 

console.log(bestia);
console.log(bestia.saludo());

/*Polimorfismo: es la práctica de diseñar objetos para compartir comportamientos y poder anular los comportamientos compartidos con otros especificos. El polimorfismo se aprovecha de la herencia para que eesto suceda*/