const {request,response} = require (`express`);

const router = Router ();


const getdetalleEnvios = (req=request,res =response ) => res.send('GET Endpoint para detalleEnvios')
const postdetalleEnvios = (req=request,res =response ) => res.send('POST Endpoint para detalleEnvios')
const putdetalleEnvios = (req=request,res =response ) => res.send('PUT Endpoint para detalleEnvios')
const deletedetalleEnvios = (req=request,res =response ) => res.send('DELETE Endpoint para detalleEnvios')

 
module.exports ={

    getdetalleEnvios,
    postdetalleEnvios,
    putdetalleEnvios,
    deletedetalleEnvios
    
    }