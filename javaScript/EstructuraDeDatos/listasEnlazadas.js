'use strict'


class Node {
    constructor(data, next){
        this.data = data
        this.next = next
    }
}

class Linkedlist {
    constructor(){
        this.head = null
    }

    insertar = (value) => {
        const node = new Node(value, this.head)
        this.head = node
        console.log('head', node)
    }

    delete = () => {
        if (this.head) {
            if (this.head.next) {
                const segundoNodo = this.head.next
                this.head = segundoNodo
            }else{
                this.head = null
            }
        }
        console.log('delete', this.head)
    }

    recorrido = () => {
        let nodoActual = this.head
        while (nodoActual) {
            console.log('recorrido',nodoActual)
            nodoActual = nodoActual.next
        }
    }

        find = (dato) => {
            if (!this.head) {
                return null
            }

            let nodoActual = this.head
            while (nodoActual) {
                if (nodoActual.data === dato) {
                    return nodoActual.data
                }
                nodoActual = nodoActual.next
            }
            return 'valor no encontrado'
        }

}

const linkedlist = new Linkedlist

linkedlist.insertar('a')
linkedlist.insertar('b')
linkedlist.insertar('c')

linkedlist.recorrido()

const valorEncontrado = linkedlist.find('a')
console.log(valorEncontrado);

// linkedlist.delete()



/* EJEMPLO
const list = {
    usuario1: {},
    usuario2: {},
    usuario3: {
    escuelas: {
        prepa: {
        valorDeLaPrepa: 'PREPA DIEZ'
        }
    }
    },
    usuario4: {
    escuelas: [
        'Kinder',
        'Primaria',
        {
        prepa: [
            'prepa1',
            'prepa2'
        ]
        }
    ]
    },
}
console.log('Primer prepa ', list.usuario3.escuelas.prepa.valorDeLaPrepa);
console.log('Primer prepa ', list.usuario4.escuelas[2].prepa[1]);
*/