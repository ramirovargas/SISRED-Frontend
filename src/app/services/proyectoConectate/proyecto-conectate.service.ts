import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from  '@angular/common/http';

import { ProyectoConectate } from './proyectoConectate';
import { PROYECTO_CONECTATE } from './mock-proyecto-conectate';
import { Red } from '../red/red';
import { REDS } from '../red/mock-reds';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoConectateService {

  private proyecto: ProyectoConectate;
  private reds: Red[] = [];

  constructor(private httpClient: HttpClient) { }

  getProyecto(id: number): Observable<ProyectoConectate> {
    /*this.httpClient.get(`${environment.apiUrl}/proyectos/${id}`).subscribe((data:  any) => {
      this.proyecto = new ProyectoConectate();
      this.proyecto.nombre = data.nombre;
      this.proyecto.nombreCorto = data.nombre_corto;
      this.proyecto.codigo = data.codigo;
      this.fechaInicio = data.fecha_inicio;
      this.fechaCierre = data.fecha_cierre;
    });*/
    this.proyecto = PROYECTO_CONECTATE;
    return of(this.proyecto);
  }

  getRedsProyecto(id: number): Observable<Red[]> {
    /*this.httpClient.get(`${this.API_URL}/proyectos/${id}/reds`).subscribe((data:  Array<any>) => {
      data.forEach( dataItem => {
        let red1 = new Red();
        //hacer todo.
        this.reds.push(red1);
      });
    });*/
    this.reds = REDS;
    return of(this.reds);
  }
}
