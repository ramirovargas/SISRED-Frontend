import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSpinKitModule } from 'ng-spin-kit';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RedsRelacionadosComponent } from './components/reds-relacionados/reds-relacionados.component';
import { RedRecursosDetalleComponent } from './components/red-recursos-detalle/red-recursos-detalle.component';
import { RedRecursosComponent } from './components/red-recursos/red-recursos.component';

@NgModule({
  declarations: [
    AppComponent,
    RedsRelacionadosComponent,
    RedRecursosDetalleComponent,
    RedRecursosComponent
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
