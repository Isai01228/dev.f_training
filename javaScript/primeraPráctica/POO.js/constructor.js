'use strict';

//Crear una clase funcion constructora
//Dentro coloco la aminima cantidad de atributos que necesito para crear un molde/plantilla/clase
function Persona(nombre, apellido, edad, correo) {
    //this es un objeto o de Js, que hace referencia al contexto en el que se esta ejecutando su funcion 
    this.nombre = nombre;
    this.apellido = apellido
    this.edad = edad
    this.correo = correo
    this.obtenerCorreo = (correo) => {
        return this.correo
    }
    this.editarCorreo = (mail) =>{
        this.correo = mail
        return this.correo
    }
}

//Un objeto es una instansia de la clase
const Luis = new Persona('Luis Felipe', 'Navarro', 17, 'lfNavarro@presidente.gob') 
console.log(Luis);

const Rubí = new Persona('Rubí', 'Wiesse', '22', 'Rubí@holasoynuebo.com')