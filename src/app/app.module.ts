import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSpinKitModule } from 'ng-spin-kit';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RedsRelacionadosComponent } from './components/reds-relacionados/reds-relacionados.component';
import { RedsRecursosComponent } from './components/reds-recursos/reds-recursos.component';
import { RecursosComponent } from './components/recursos/recursos.component';

@NgModule({
  declarations: [
    AppComponent,
    RedsRelacionadosComponent,
    RedsRecursosComponent,
    RecursosComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgSpinKitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
