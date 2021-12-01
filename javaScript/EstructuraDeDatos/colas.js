'use strict'
//enque: agregar un nuevo elemento a la cola
//deque: Retorna el primer valor de la cola quitandola de la cola.
//peek: nos permite conocer el primer elemento agregado sin retirar el elemento de la cola.
//size: retorna el numero de elementos que tiene la cola
//print: muestra el contenido de la cola
//isEmpty: indica si la cola está vacía.
//back: nos permite conocer el último elemento de la cola sin retirar el elemento de la cola.


class Cola {
    constructor() {
        this.cola = []  
    }

    enque = (dato) => this.cola.unshift(dato)

    deque = () => {return this.cola[0]}

    size = () => {return this.cola.length}

    print = () => {return this.cola}

    isEmpty = () => {this.cola == ''? console.log('La cola no tiene elementos'): console.log('La cola ya cuenta con elementos')}
}

const cola = new Cola

cola.isEmpty()

console.log(cola.print())

cola.enque('a')
cola.enque('b')
cola.enque('c')
cola.enque('d')

console.log(cola.print())

console.log(`El número de elementos en la cola es de: ${cola.size()}`);

cola.isEmpty()