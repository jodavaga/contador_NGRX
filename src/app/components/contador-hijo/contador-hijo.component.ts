import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppState } from '../../store/app.reducers';

import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-contador-hijo',
  templateUrl: './contador-hijo.component.html',
  styleUrls: ['./contador-hijo.component.css']
})
export class ContadorHijoComponent implements OnInit {

  // Comunicacion entre componentes regular
  // @Input() contadorHijo: number;
  // @Output() contadorHijoCambio = new EventEmitter<number>();

  contadorHijo: number;

  constructor( private store: Store<AppState> ) {
  }

  ngOnInit() {
    // NGRX
    this.store.pipe(select('contador')).subscribe( counter => this.contadorHijo = counter );
  }

  multiplicar() {
    this.contadorHijo *= 2;
    // this.contadorHijoCambio.emit(this.contadorHijo);
  }

  dividir() {
    this.contadorHijo /= 2;
    // this.contadorHijoCambio.emit(this.contadorHijo);
  }

  resetNieto( number: number) {
    this.contadorHijo = number;
    // this.contadorHijoCambio.emit(this.contadorHijo);
  }

}
