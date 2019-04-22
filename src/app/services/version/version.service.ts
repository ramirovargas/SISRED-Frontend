import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Version } from './version.model';
import { HttpClient } from '@angular/common/http';
import { Dropbox } from 'dropbox';
import fetch from 'isomorphic-fetch';
import { environment } from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VersionService {
  API_URL = environment.apiUrl + 'reds/{id}/versiones/';
  private versiones: Array<Version> = [];

  constructor(private httpClient: HttpClient) { }

  // Metodo que invoca al servicio que obtiene las versiones del RED
  getVersiones(idRed: number): Promise<Version[]> {
    this.versiones = [];
    const apiUrlFinal = this.API_URL.replace('{id}', idRed.toString());
    return new Promise((resolve, reject) => {
      this.httpClient.get(apiUrlFinal).subscribe((data: any) => {
        data.context.forEach(dataItem => {
          const version = new Version();
          version.numero = dataItem.numero;
          version.fechaCreacion = dataItem.fecha_creacion;
          version.creadoPor = dataItem.creado_por.usuario.username;
          version.esFinal = dataItem.es_final;
          version.imagen = dataItem.imagen;
          version.url = '';
          this.versiones.push(version);
        });
        // Ordena la lista de versiones por fecha de manera descendiente
        let versionesSorted: Array<Version>;
        versionesSorted = this.versiones.slice(0);
        versionesSorted.sort((leftSide, rightSide): number => {
          const leftSideDate = new Date(leftSide.fechaCreacion);
          const rightSideDate = new Date(rightSide.fechaCreacion);
          if (leftSideDate < rightSideDate) { return 1; }
          if (leftSideDate > rightSideDate) { return -1; }
          return 0;
        });
        resolve(versionesSorted);
      });
    });
  }

  getImagenVersion(ruta: string): Promise<any> {
    const ACCESS_TOKEN = 'FOsYIGqxyoAAAAAAAAAACo5sRYD5XCAOZy15c341h99QLcgRWBeiWQfRgnCOt0Gq';
    const dbx = new Dropbox({ accessToken: ACCESS_TOKEN, fetch });
    return dbx.filesGetTemporaryLink({path: ruta});
  }
}
