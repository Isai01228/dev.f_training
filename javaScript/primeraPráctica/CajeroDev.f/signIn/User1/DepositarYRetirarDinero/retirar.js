'use strict'

const confUserT = document.querySelector('#confUserT')
const userConfI = document.querySelector('#userConfI')
const userConfB = document.querySelector('#userConfB')
const saldoInput = document.querySelector('#saldoInput')
const saldoOutput = document.querySelector('#saldoOutput')
const arrowUp = document.querySelector('#arrowUp')
const arrowDown = document.querySelector('#arrowDown')

const usersObject = [
    {
        nombre: 'Wiesse',
        dineroAlm: `$${200}`,
    },
    {
        nombre: 'Gera',
        dineroAlm: `$${290}`,
    },
    {
        nombre: 'Maui',
        dineroAlm: `$${67}`,
    }
]

const userConfirm  = (userConfirm) => {
    userConfirm = userConfI.value
    usersObject.forEach(el => {
        if (el.nombre === userConfirm) {
            saldoInput.value = el.dineroAlm
            saldoOutput.value = `$${0}`
            const restMoney = () => {
                saldoOutput.value = `${el.dineroAlm}`
                console.log(saldoOutput.value);
            }
            arrowDown.onclick = restMoney

            confUserT.replaceWith('')
            userConfI.replaceWith('')
            userConfB.replaceWith('')
        }else{
            confUserT.textContent = 'Nombre de usuario incorrecto, por favor intentelo de nuevo'
        }
    }
    )
    
}

userConfB.onclick = userConfirm