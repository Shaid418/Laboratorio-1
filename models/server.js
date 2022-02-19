
const express = require('express');

class Server{

constructor(){
this.app = express()
this.routes();
}
routes(){
    
this.app.use(`/precios`,require(`../routes/precios`))
this.app.use(`/detalleenvios`,require(`../routes/detaleEnvios`))
this.app.use(`/envios`,require(`../routes/envios`))
this.app.use(`/paquetes`,require(`../routes/paquetes`))
this.app.use(`/seguimiento`,require(`../routes/seguimiento`))




}
 
listen() {
this.app.listen(process.env.PORT,()=>
console.log("EL puerto esta corriendo el puerto TCP" + process.env.PORT))

}

}


module.exports = server

