import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSpinKitModule } from 'ng-spin-kit'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RedsRelacionadosComponent } from './components/reds-relacionados/reds-relacionados.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RedsRelacionadosComponent
  ],
  imports: [
    BrowserModule,
    NgSpinKitModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
