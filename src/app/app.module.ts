import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetalleRecursoComponent } from './detalle-recurso/detalle-recurso.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ResourceDetailsRestClientService } from './services/resource-details-rest-client.service';


@NgModule({
  declarations: [
    AppComponent,
    DetalleRecursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ResourceDetailsRestClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
