import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VerAvanceRedComponent } from './ver-avance-red/ver-avance-red.component';

@NgModule({
  declarations: [
    AppComponent,
    VerAvanceRedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
