'use strict'
module.exports = {
    obtenerUsuariosSync(id) {
        const tiempoInicio = new Date().getTime()
        console.log('tiempoInicio', tiempoInicio);
        while (new Date().getTime() - tiempoInicio <= 3000) {
            // Esperando..
            return {
                id,
                nombre: `Usuario ${id}`
            }
        }
    },
    obtenerUsuariosAsync(id, callback) {
        const usuario = {
            id: id,
            nombre: `Usuario ${id}`
        }

        setTimeout(() => {
            callback(usuario)
        }, 3000)
    }
}

