import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SubirREDComponent } from './components/subir-red/subir-red.component';
import { RedsPorPersonaComponent } from './components/reds-por-persona/reds-por-persona.component';
import { AvanceProyectoConectateComponent } from './components/avance-proyecto-conectate/avance-proyecto-conectate.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SubirREDComponent,
    RedsPorPersonaComponent,
    AvanceProyectoConectateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
