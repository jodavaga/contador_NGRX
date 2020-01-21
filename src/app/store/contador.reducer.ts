import { Action } from '@ngrx/store';
import * as contadorActions from '../store/contador.actions';


export function contadorReducer( state: number = 10, action: Action ) {

    switch ( action.type ) {

        case contadorActions.INCREMENTAR:
            return state + 1;

        case contadorActions.DECREMENTAR:
            return state - 1;

        case contadorActions.MULTIPLICAR:
            return state * 2;

        case contadorActions.DIVIDIR:
            return state / 2;

        default:
            return state;
    }
}
