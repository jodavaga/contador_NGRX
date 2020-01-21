import { Action } from '@ngrx/store';

export const INCREMENTAR = '[contador] Incrementar';
export const DECREMENTAR = '[contador] Decrementar';
export const MULTIPLICAR = '[contadorHijo] Multiplicar';
export const DIVIDIR     = '[contadorHijo] Dividir';

export class IncrementarAction implements Action {
    readonly type = INCREMENTAR;
    constructor() {}
}

export class DecrementarAction implements Action {
    readonly type = DECREMENTAR;
    constructor() {}
}

export class MultiplicarAction implements Action {
    type = MULTIPLICAR;
    constructor() {}
}

export class DividirAction implements Action {
    type = DIVIDIR;
    constructor() {}
}

export type contadorActions =   IncrementarAction |
                                DecrementarAction |
                                MultiplicarAction |
                                DividirAction;
