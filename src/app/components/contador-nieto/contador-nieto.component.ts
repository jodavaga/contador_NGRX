import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import * as contadorActions from '../../store/contador.actions';

@Component({
  selector: 'app-contador-nieto',
  templateUrl: './contador-nieto.component.html',
  styles: []
})
export class ContadorNietoComponent implements OnInit {

  // @Input() contadorNieto: number;
  // @Output() contadorNietoCambio =  new EventEmitter<number>();

  contadorNieto: number;

  constructor( private store: Store<AppState> ) {
    this.store.subscribe( state => {
      this.contadorNieto = state.contador;
    });

  }

  ngOnInit() {
  }

  reset() {
    // this.contadorNieto = 0;
    // this.contadorNietoCambio.emit(this.contadorNieto);

    // NGRX
    this.store.dispatch(new contadorActions.ResetAction());
  }

}
