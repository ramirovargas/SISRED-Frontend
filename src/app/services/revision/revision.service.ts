import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Revision} from './revision.model';

@Injectable({
  providedIn: 'root'
})
export class RevisionesService {
  API_URL = environment.apiUrl  + 'revisiones/2';
  private revisiones: Array<Revision> = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  // Metodo que invoca y formatea las notificaciones en el modelo definido en el forntend.
  getRevisiones(): Observable<Revision[]> {
    this.revisiones = [];
    this.httpClient.get(this.API_URL).subscribe((data: Array<any>) => {
      data.forEach(dataItem => {
        const rev = new Revision();
        rev.red = dataItem.red;
        rev.rol = dataItem.rol;
        rev.fecha = dataItem.fecha;
        rev.version = dataItem.versionId;
        rev.redId = dataItem.redId;
        this.revisiones.push(rev);
      });
    });
    return of(this.revisiones);
  }
}
