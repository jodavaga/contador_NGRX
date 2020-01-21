import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { contadorReducer } from './store/contador.reducer';

import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { ContadorHijoComponent } from './components/contador-hijo/contador-hijo.component';
import { ContadorNietoComponent } from './components/contador-nieto/contador-nieto.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ContadorHijoComponent,
    ContadorNietoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ contador: contadorReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
