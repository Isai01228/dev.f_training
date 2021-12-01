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

    isEmpty = () => {this.cola == [''] ? console.log('La cola esta vacía'): console.log('La cola tiene elementos')}
}

const cola = new Cola

cola.enque('a')
cola.enque('b')
cola.enque('c')
cola.enque('d')

console.log(cola.print());
console.log(`El número de elementos en la cola es de: ${cola.size()}`);
console.log(cola.isEmpty());