import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador-nieto',
  templateUrl: './contador-nieto.component.html',
  styles: []
})
export class ContadorNietoComponent implements OnInit {

  @Input() contadorNieto: number;
  @Output() contadorNietoCambio =  new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  reset() {
    this.contadorNieto = 0;
    this.contadorNietoCambio.emit(this.contadorNieto);
  }

}
