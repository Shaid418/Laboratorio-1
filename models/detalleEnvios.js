const {v4: uuidv4} = require('uuid');

class DetallesEnvios{
    constructor(idEnvio, idPaquetes){
        this.id=uuidv4()
        this.idEnvio=idEnvio
        this.idPaquetes=idPaquetes
    }
}

class ListadoDetallesEnvios{
    constructor(){
        this._listado = {};
    }

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;
    }

    cargarTareasFromArray(datos = []) {
        datos.forEach(detallesEnvios => {
            this._listado[detallesEnvios.id] = detallesEnvios;
        });
    }

    crearDetallesEnvio(datos){
        const detallesEnvios = new DetallesEnvios(
        datos.idEnvio,
        datos.idPaquetes);
        this._listado[detallesEnvios.id] = detallesEnvios;
    }
}

module.exports ={
    ListadoDetallesEnvios
}