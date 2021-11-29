'use strict'

const moneyScreeen = document.querySelector('#moneyScreeen')
const passConfI = document.querySelector('#passConfI')
const passConfB = document.querySelector('#passConfB')
const confpassT = document.querySelector('#confpassT')
const buttonsReplace = document.querySelector('buttonsReplace')
const userMoney = document.querySelector('#userMoney')
const depCashButton = document.querySelector('.transCashButton')
const retMoneyButton = document.querySelector('.retMoneyButton')

const usersObject = [
    {
        nombre: 'Wiesse',
        password: 'hellowWorld',
        dineroAlm: `$${200}`,
        location: './signIn/User1/inex.html'
    },
    {
        nombre: 'Gera',
        password: 'l33t',
        dineroAlm: `$${290}`,
        location: './signIn/User2/index.html'
    },
    {
        nombre: 'Maui',
        password: '123',
        dineroAlm: `$${67}`,
        location: './signIn/User3/index.html'
    }
]

const retDirection = () => {
    window.location = './DepositarYRetirarDinero/ret.html'
}

const depDirection = () => {
    window.location = './DepositarYRetirarDinero/dep.html'
}

const userConfirm  = (passwordInput) => {
    passwordInput = passConfI.value
    usersObject.forEach(el => {
        if (el.password === passwordInput) {
            moneyScreeen.textContent = `Buen día ${el.nombre}, que acción desea realizar hoy!?`
            userMoney.textContent = `Usted cuenta con un saldo de ${el.dineroAlm}`
            confpassT.replaceWith('')
            passConfI.replaceWith('')
            passConfB.replaceWith('')

            retMoneyButton.onclick = retDirection
            depCashButton.onclick = depDirection
        }else{
            confpassT.textContent = 'Su contraseña es incorrecta, por favor intentelo de nuevo'
        }
    });
    
}

passConfB.onclick = userConfirm