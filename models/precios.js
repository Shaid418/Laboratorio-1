const {v4: uuidv4} = require('uuid');

class Precios{
    constructor(cantidad,valor,estado){
        this.id=uuidv4()
        this.cantidad=cantidad
        this.valor=valor
        this.estado=estado
    }
}

class ListadoPrecios{
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
        datos.forEach(precios => {
            this._listado[precios.id] = precios;
        });
    }

    crearPrecios(datos){
        const precios = new Precios(
        datos.cantidad,
        datos.valor,
        datos.estado);
        this._listado[precios.id] = precios;
    }
}

module.exports ={
    ListadoPrecios
}