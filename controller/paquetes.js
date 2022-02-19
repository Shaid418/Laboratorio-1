const {request,response} = require (`express`);

const router = Router ();


const getpaquetes = (req=request,res =response ) => res.send('GET Endpoint para paquetes')
const postpaquetes = (req=request,res =response ) => res.send('POST Endpoint para paquetes')
const putpaquetes = (req=request,res =response ) => res.send('PUT Endpoint para paquetes')
const deletepaquetes = (req=request,res =response ) => res.send('DELETE Endpoint para paquetes')

 
module.exports ={

    getpaquetes,
    postpaquetes,
    putpaquetes,
    deletepaquetes
    
    }