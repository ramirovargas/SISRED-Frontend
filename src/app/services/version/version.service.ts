import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Version } from './version.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class VersionService {
  API_URL = environment.apiUrl + 'reds/{id}/versiones/';
  MARCAR_VERSION_URL = environment.apiUrl + 'versiones/{id}/marcar';
  private versiones: Array<Version> = [];

  constructor(private httpClient: HttpClient) { }

  // Metodo que invoca al servicio que obtiene las versiones del RED
  getVersiones(idRed: number): Observable<Version[]> {
    const apiUrlFinal = this.API_URL.replace('{id}', idRed.toString());
    this.versiones = [];
    this.httpClient.get(apiUrlFinal).subscribe((data: any) => {
      data.context.forEach(dataItem => {
        const version = new Version();
        version.numero = dataItem.numero;
        version.fechaCreacion = dataItem.fecha_creacion;
        version.creadoPor = dataItem.creado_por.usuario.username;
        version.esFinal = dataItem.es_final;
        version.imagen = dataItem.imagen;
        this.versiones.push(version);
      });
    });
    return of(this.versiones);
  }

  markAsFinal(versionNumero: number): Observable<Version> {
    const apiUrlMarcar = this.MARCAR_VERSION_URL.replace('{id}', versionNumero.toString());
    return this.httpClient.post<Version>(apiUrlMarcar, "");
  }
}
