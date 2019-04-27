import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Recurso } from './recurso';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuscarRecursoService {

  constructor(private httpClient: HttpClient) { }

  buscarRecursos(name, fechaInicio, fechaCierre, texto): Promise<Recurso[]> {

    let params = new HttpParams();

    params = name === null ? params : params.append('name', name)
    params = fechaInicio === null ? params : params.append('fdesde', fechaInicio)
    params = fechaCierre === null ? params : params.append('fhasta', fechaCierre)
    params = texto === null ? params : params.append('text', texto)

    let options = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      }),
      params,
    };

    return new Promise((resolve, reject) => {
      this.httpClient.get(`${environment.apiUrl}buscarRecurso/`, options).subscribe((data: Array<any>) => {
        let recursos = [];
        data.forEach(item => {
          let recurso = new Recurso();
          recurso.id = item.id;
          recurso.nombre = item.nombre;
          recurso.descripcion = item.descripcion;
          recurso.fecha_creacion = item.fecha_creacion;
          recurso.metadata = item.metadata;
          recurso.tipo = item.tipo;
          recursos.push(recurso);
        });
        resolve(recursos);
      }, err => {
        reject(err);
      });
    });
  }
}
