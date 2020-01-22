import { Action } from '@ngrx/store';

export const INCREMENTAR = '[contador] Incrementar';
export const DECREMENTAR = '[contador] Decrementar';
export const MULTIPLICAR = '[contadorHijo] Multiplicar';
export const DIVIDIR     = '[contadorHijo] Dividir';
export const RESET     = '[contadorNieto] Reset';

export class IncrementarAction implements Action {
    readonly type = INCREMENTAR;
    constructor() {}
}

export class DecrementarAction implements Action {
    readonly type = DECREMENTAR;
    constructor() {}
}

export class MultiplicarAction implements Action {
    readonly type = MULTIPLICAR;
    constructor(public payload: number) {}
}

export class DividirAction implements Action {
    readonly type = DIVIDIR;
    constructor(public payload: number) {}
}

export class ResetAction implements Action {
    readonly type = RESET;
    constructor() {}
}

export type contadorActions =   IncrementarAction |
                                DecrementarAction |
                                MultiplicarAction |
                                DividirAction |
                                ResetAction;
