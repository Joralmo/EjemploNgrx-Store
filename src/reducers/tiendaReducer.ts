import * as Acciones from '../acciones/postAcciones';

export type Accion = Acciones.Todo;

export interface Tienda{
    codigo:String;
    negocio:String;
    direccion:String;
    barrio:String;
    estado:Number;
}

export interface Estado{
    tiendas: [Tienda];
}

export function tiendaReducer(estado=[], accion){
    switch(accion.type){
        case Acciones.AGREGAR:
            return[...estado, ...accion.datos];
        
        case Acciones.BORRAR:
            return estado.filter(tienda => tienda.codigo != accion.datos.codigo);
        
        case Acciones.RESETEAR:
            return [];
        
        default:
            return estado;
    }
}