import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
