import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSpinKitModule } from 'ng-spin-kit'

import { AppComponent } from './app.component';
import { RedsRelacionadosComponent } from './components/reds-relacionados/reds-relacionados.component';

@NgModule({
  declarations: [
    AppComponent,
    RedsRelacionadosComponent
  ],
  imports: [
    BrowserModule,
    NgSpinKitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
