const { request, response } = require('express')
const { ListadoEnvios } = require('../models/envio');
const { guardarDB, leerDB } = require('../helpers/gestorDB')

const getEnvios = (req = request, res = response) => {
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envio');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const postEnvios = (req = request, res = response) =>{
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envio');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearEnvio(req.body)
    guardarDB(lista.listadoArr,'envio')
    res.send('Registro Creado')
}

const putEnvios = (req = request, res = response) =>{
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envio');
    lista.cargarTareasFromArray(datosJSON)
    
    const datos = lista.listadoArr.map(item =>
          item.id == req.params.id
          ? {"id":item.id, ...req.body}
          : item
        );
    guardarDB(datos,'envio')
    res.send('Registro Actualizado')
}
    
const deleteEnvios = (req = request, res = response) =>{
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envio');
    lista.cargarTareasFromArray(datosJSON)
    let data = lista.listadoArr.filter(item =>  item.id !== req.params.id)
    guardarDB(data,'envio')
    res.send('Registro Eliminado')
}
    
module.exports = {
    getEnvios,
    postEnvios,
    putEnvios,
    deleteEnvios
}