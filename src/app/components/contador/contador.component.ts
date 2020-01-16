import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styles: []
})
export class ContadorComponent implements OnInit {

  contador: number;

  constructor() {
    this.contador = 10;
  }

  ngOnInit() {
  }

  incrementar() {
    this.contador ++;
  }

  decrementar() {
    this.contador --;
  }

  contadorHijoCambio(number: number) {
    this.contador = number;
  }

}
