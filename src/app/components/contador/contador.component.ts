import { Component, OnInit } from '@angular/core';

// NGRX
import { Store } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from '../../store/contador.actions';
import { AppState } from '../../store/app.reducers';


@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styles: []
})
export class ContadorComponent implements OnInit {

  contador: number;

  constructor( private store: Store<AppState>) {
    // this.contador = 10;

    // NGRX
    this.store.subscribe( state => {
      this.contador = state.contador;
    });
  }

  ngOnInit() {
  }

  incrementar() {
    // this.contador ++;

    // NGRX
    const action = new IncrementarAction();
    this.store.dispatch(action);
  }

  decrementar() {
    // this.contador --;

    // NGRX
    const action = new DecrementarAction();
    this.store.dispatch(action);
  }

  contadorHijoCambio(number: number) {
    this.contador = number;
  }

}
