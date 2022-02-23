const {request, response} = require('express')

const getpaquete = (request,response)=>
        res.send('GET Endpoint para Paquete')

const postpaquete = (request,response)=>
        res.send('POST Endpoint Paquete')

const putpaquete = (request,response)=>
        res.send('PUT Endpoint para Paquete')

const deletepaquete = (request,response)=>
        res.send('DELETE Endpoint para Paquete')

        


module.exports = {
        getpaquete,
        postpaquete,
        putpaquete,
        deletepaquete
}