import { Action } from '@ngrx/store';

export const INCREMENTAR = '[contador] Incrementando';
export const DECREMENTAR = '[contador] Decrementando';

export class IncrementarAction implements Action {
    readonly type = INCREMENTAR;
    constructor() {}
}

export class DecrementarAction implements Action {
    readonly type = DECREMENTAR;
    constructor() {}
}
