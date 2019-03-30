import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarRecursoComponent } from './AgregarRecurso/agregar-recurso.component';
import { AgregarRecursoClientService } from './services/agregar-recurso-client.service';


@NgModule({
  declarations: [
    AppComponent,
    AgregarRecursoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AgregarRecursoClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
