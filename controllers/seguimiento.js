const {request, response} = require('express')

const getseguimiento = (request,response)=>
        res.send('GET Endpoint para Seguimiento')

const postseguimiento = (request,response)=>
        res.send('POST Endpoint Seguimiento')

const putseguimiento = (request,response)=>
        res.send('PUT Endpoint para Seguimiento')

const deleteseguimiento = (request,response)=>
        res.send('DELETE Endpoint para Seguimiento')

        


module.exports = {
        getseguimiento,
        postseguimiento,
        putseguimiento,
        deleteseguimiento
}