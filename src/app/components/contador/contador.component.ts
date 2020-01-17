import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';

interface AppState {
  contador: number;
}

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
      console.log(state);
      this.contador = state.contador;
    });
  }

  ngOnInit() {
  }

  incrementar() {
    // this.contador ++;
    const action: Action = {
      type: 'INCREMENTAR'
    };

    this.store.dispatch(action);
  }

  decrementar() {
    // this.contador --;
    const action: Action = {
      type: 'DECREMENTAR'
    };

    this.store.dispatch(action);
  }

  contadorHijoCambio(number: number) {
    this.contador = number;
  }

}
