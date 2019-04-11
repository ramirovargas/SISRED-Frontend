import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Version } from './version.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VersionService {
  API_URL = environment.apiUrl + 'reds/{id}/versiones';
  private versiones: Array<Version> = [];

  constructor(private httpClient: HttpClient) { }

    // Metodo que invoca al servicio que obtiene las versiones del RED
  getVersiones(idRed: number): Observable<Version[]> {
    const apiUrlFinal = this.API_URL.replace('{id}', idRed.toString());

    this.httpClient.get(apiUrlFinal).subscribe((data: Array<any>) => {
      data.forEach(dataItem => {
        const version = new Version();
        version.numero = dataItem.numero;
        version.fechaCreacion = dataItem.fecha_creacion;
        version.creadoPor = dataItem.creadoPor;
        version.esFinal = dataItem.es_final;
        version.imagen = dataItem.imagen;
        this.versiones.push(version);
      });
    });
    return of(this.versiones);
  }
}
