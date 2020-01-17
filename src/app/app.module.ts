import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// NGRX
import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './store/contador.reducer';

import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { ContadorHijoComponent } from './components/contador-hijo/contador-hijo.component';
import { ContadorNietoComponent } from './components/contador-nieto/contador-nieto.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ContadorHijoComponent,
    ContadorNietoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ contador: contadorReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
