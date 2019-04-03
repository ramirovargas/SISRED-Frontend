import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSpinKitModule } from 'ng-spin-kit';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddRedComponent } from './components/add-red/add-red.component';
import { AppRoutingModule } from './app-routing.module';
import { RedAsignadosComponent } from './components/red/asignaciones/red-asignados.component';
import { DetalleREDComponent } from './components/detalle-red/detalle-red.component';
import { ProyectosRedComponent } from './components/proyectos-red/proyectos-red.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RedsRelacionadosComponent } from './components/reds-relacionados/reds-relacionados.component';
import { RedRecursosDetalleComponent } from './components/red-recursos-detalle/red-recursos-detalle.component';
import { RedRecursosComponent } from './components/red-recursos/red-recursos.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRedComponent,
    RedAsignadosComponent,
    DetalleREDComponent,
    ProyectosRedComponent,
    AppComponent,
    RedsRelacionadosComponent,
    RedRecursosDetalleComponent,
    RedRecursosComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgSpinKitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
