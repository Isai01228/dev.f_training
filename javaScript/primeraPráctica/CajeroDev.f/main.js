'use strict'

const userName = document.querySelector('#userName')
const userPass = document.querySelector('#userPass')
const signInButton = document.querySelector('#signInButton')
const errUsOrPass = document.querySelector('.errUsOrPass')

const usersObject = [
    {
        nombre: 'Wiesse',
        password: 'hellowWorld',
        location: './signIn/User1/inex.html'
    },
    {
        nombre: 'Gera',
        password: 'l33t',
        location: './signIn/User1/inex.html'
    },
    {
        nombre: 'Maui',
        password: '123',
        location: './signIn/User1/inex.html'
    }
]
const signIn  = (userInput, passwordInput) => {
    userInput = userName.value
    passwordInput = userPass.value
    usersObject.forEach(el => {
        if (el.nombre === userInput && el.password === passwordInput) {
            window.location = el.location
        }else{
            errUsOrPass.replaceWith('El nombre de usuario o contraseña son incorrectos, por favor intentelo de nuevo')
        }
    });
}

signInButton.onclick = signIn