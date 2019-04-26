import {Injectable} from '@angular/core';
import {Version} from '../version.model';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Recurso} from './recurso.model';
import { Dropbox } from 'dropbox';
import fetch from 'isomorphic-fetch';

@Injectable({
  providedIn: 'root'
})
export class VerVersionRedService {

  constructor(private http: HttpClient) {}

  getVersion(idVersion: number): Promise<Version> {
    const urlVersion = environment.apiUrl + 'versiones/{id}/';
    const apiUrl = urlVersion.replace('{id}', idVersion.toString());
    return new Promise((resolve, reject) => {
      this.http.get<any>(apiUrl).subscribe(dataItem => {
        const vVersion: Version = new Version();
        vVersion.numero = dataItem.numero;
        vVersion.fechaCreacion = dataItem.fecha_creacion;
        vVersion.creadoPor = dataItem.creado_por.usuario.username;
        vVersion.imagen = dataItem.imagen;
        vVersion.url = '';
        vVersion.nombreRed = dataItem.red.nombre;
        vVersion.nombreConectate = dataItem.red.proyecto_conectate.nombre;
        resolve(vVersion);
      }, err => {
        reject(err);
      });
    });
  }

  getRecursosVersion(idVersion: number): Observable<Array<Recurso>> {
    const urlVersion = environment.apiUrl + 'versiones/{id}/recursos/';
    const apiUrl = urlVersion.replace('{id}', idVersion.toString());
    const vLstRecurso: Array<Recurso> = [];
    this.http.get<any>(apiUrl).subscribe(dataItem => {
      dataItem.context.forEach(item => {
        const vObjeto = new Recurso();
        vObjeto.nombre = item.nombre;
        vObjeto.fechaCreacion = item.fecha_creacion;
        vObjeto.tipo = item.tipo;
        vObjeto.thumbnail = item.thumbnail;
        vObjeto.descripcion = item.descripcion;
        vObjeto.archivo = item.archivo;
        vLstRecurso.push(vObjeto);
      });
    });
    return of(vLstRecurso);
  }

  /*getArchivoVersion(ruta: string): Promise<any> {
    const ACCESS_TOKEN = 'FOsYIGqxyoAAAAAAAAAAMg1bkfJ0WKhDIy4fQtWjI0hl9U6Q5jI-Y8qy-hv5KiiH';
    const dbx = new Dropbox({ accessToken: ACCESS_TOKEN, fetch });
    return dbx.filesGetTemporaryLink({path: ruta});
  }*/

  /*getArchivoVersion(ruta: string): any {
    const ACCESS_TOKEN = 'FOsYIGqxyoAAAAAAAAAAMg1bkfJ0WKhDIy4fQtWjI0hl9U6Q5jI-Y8qy-hv5KiiH';
    const dbx = new Dropbox({ accessToken: ACCESS_TOKEN });
    return of(dbx.filesGetTemporaryLink({path: ruta}));
  }*/
}
