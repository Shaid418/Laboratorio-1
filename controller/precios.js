const {request,response} = require (`express`);

const router = Router ();


const getprecios = (req=request,res =response ) => res.send('GET Endpoint para precios')
const postprecios = (req=request,res =response ) => res.send('POST Endpoint para precios')
const putprecios = (req=request,res =response ) => res.send('PUT Endpoint para precios')
const deleteprecios = (req=request,res =response ) => res.send('DELETE Endpoint para precios')

 
module.exports ={

    getprecios,
    postprecios,
    putprecios,
    deleteprecios
    
    }