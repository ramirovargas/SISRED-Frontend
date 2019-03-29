import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RedsRelacionadosComponent } from './components/reds-relacionados/reds-relacionados.component';

@NgModule({
  declarations: [
    AppComponent,
    RedsRelacionadosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
