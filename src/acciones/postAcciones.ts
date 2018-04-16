import { Post } from './../reducers/postReducer';
import { Action } from '@ngrx/store';

export const AGREGAR = "AGREGAR";
export const BORRAR = "BORRAR";
export const RESETEAR = "RESETEAR";

export class Agregar implements Action{
    readonly type = AGREGAR;
    constructor(public datos:Post){}
}

export class Borrar implements Action{
    readonly type = BORRAR;
    constructor(public datos:any){}
}

export class Resetear implements Action{
    readonly type = RESETEAR;
    constructor(public datos:any){}
}

export type Todo = Agregar | Borrar | Resetear;