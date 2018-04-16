import * as Acciones from '../acciones/postAcciones';

export type Accion = Acciones.Todo;

export interface Post{
    id:String;
    titulo:String;
    descripcion:String;
}

export interface Estado{
    posts: [Post];
}

export function postReducer(estado=[], accion){
    switch(accion.type){
        case Acciones.AGREGAR:
            return[...estado, ...accion.datos];
        
        case Acciones.BORRAR:
            return estado.filter(post => post.id != accion.datos.id);
        
        case Acciones.RESETEAR:
            return [];
        
        default:
            return estado;
    }
}