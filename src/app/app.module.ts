import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DetalleRecursoComponent } from "./detalle-recurso/detalle-recurso.component";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ResourceDetailsRestClientService } from "./services/resource-details-rest-client.service";
import { HttpModule } from "@angular/http";

import { VerAvanceRedComponent } from "./ver-avance-red/ver-avance-red.component";

@NgModule({
  declarations: [AppComponent, DetalleRecursoComponent, VerAvanceRedComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ResourceDetailsRestClientService],
  bootstrap: [AppComponent]
})
export class AppModule {}
