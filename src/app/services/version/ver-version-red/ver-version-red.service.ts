import {Injectable} from '@angular/core';
import {Version} from '../version.model';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Recurso} from './recurso.model';

@Injectable({
  providedIn: 'root'
})
export class VerVersionRedService {

  constructor(private http: HttpClient) {
  }

  getVersion(idVersion: number): Observable<Version> {
    const urlVersion = environment.apiUrl + 'versiones/{id}/';
    const apiUrl = urlVersion.replace('{id}', idVersion.toString());
    const vVersion: Version = new Version();
    this.http.get<any>(apiUrl).subscribe(dataItem => {
      vVersion.numero = dataItem.numero;
      vVersion.fechaCreacion = dataItem.fecha_creacion;
      vVersion.creadoPor = dataItem.creado_por.usuario.username;
      vVersion.imagen = dataItem.imagen;
      vVersion.url = '';
      vVersion.nombreRed = dataItem.red.nombre;
      vVersion.nombreConectate = dataItem.red.proyecto_conectate.nombre;
    });
    return of(vVersion);
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
}
