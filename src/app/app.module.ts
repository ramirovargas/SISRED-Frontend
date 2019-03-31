import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { DetalleRecursoComponent } from "./detalle-recurso/detalle-recurso.component";
import { ResourceDetailsRestClientService } from "./services/resource-details-rest-client.service";
import { HttpModule } from "@angular/http";
import { VerAvanceRedComponent } from "./ver-avance-red/ver-avance-red.component";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarRecursoComponent } from './AgregarRecurso/agregar-recurso.component';
import { AgregarRecursoClientService } from './services/agregar-recurso-client.service';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AgregarRecursoComponent,
    AppComponent,
    DetalleRecursoComponent,
    VerAvanceRedComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    NgbAlertModule,
    NgbPaginationModule
  ],
  providers: [AgregarRecursoClientService, ResourceDetailsRestClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
