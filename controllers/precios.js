const {request, response} = require('express')

const getprecios = (request,response)=>
        res.send('GET Endpoint para Precios')

const postprecios = (request,response)=>
        res.send('POST Endpoint Precios')

const putprecios = (request,response)=>
        res.send('PUT Endpoint para Precios')

const deleteprecios = (request,response)=>
        res.send('DELETE Endpoint para Precios')

        


module.exports = {
        getprecios,
        postprecios,
        putprecios,
        deleteprecios
}