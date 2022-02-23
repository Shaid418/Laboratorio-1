const { request, response } = require('express')

const getDetallesEnvios = (req = request, res = response) =>
    res.send('GET Endpoint para Detalles Envios')

const postDetallesEnvios = (req = request, res = response) =>
    res.send('POST Endpoint para Detalles Envios')

const putDetallesEnvios = (req = request, res = response) =>
    res.send('PUT Endpoint para Detalles Envios')

const deleteDetallesEnvios = (req = request, res = response) =>
    res.send('DELETE Endpoint para Detalles Envios')

module.exports = {
    getDetallesEnvios,
    postDetallesEnvios,
    putDetallesEnvios,
    deleteDetallesEnvios
}