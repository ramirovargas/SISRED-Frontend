import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddRedComponent } from './add-red/add-red.component';
import { AppRoutingModule } from './app-routing.module';
import { LoadAssignationInfoComponent } from './load-assignation-info/load-assignation-info.component';
import { RedAsignadosComponent } from './red/asignaciones/red-asignados.component';
import { DetalleREDComponent } from './detalle-red/detalle-red.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddRedComponent,
    LoadAssignationInfoComponent,
    RedAsignadosComponent,
    DetalleREDComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
