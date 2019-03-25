import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubirREDComponent } from './subir-red/subir-red.component';
import { RedsPorPersonaComponent } from './reds-por-persona/reds-por-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    SubirREDComponent,
    RedsPorPersonaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
