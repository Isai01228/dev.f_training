'use strict'

class Caninos {
    constructor(alto, ancho){
        this.alto = alto
        this.ancho = ancho
    }
}

class Doberman extends Caninos{
    constructor(alto, ancho, color, manchas ){
        var nombre = 'doberman'
        super(alto, ancho)
        this.color = color
        this.manchas = manchas
        this.getNombre = () =>{
            return nombre
        }

        this.setNombre = (nombreNuevo) => {
            nombre = nombreNuevo
        }
    }
}

const prrito1 = new Doberman (15, 25, 'naranja', false)
prrito1.setNombre('chihuahua')

console.log(`Alto del prrito1: ${prrito1.alto}, cloor: ${prrito1.color}`);
console.log(`La raza del prrito es ${prrito1.getNombre()}`);

