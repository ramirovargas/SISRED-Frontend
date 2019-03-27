import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import {RecursoAsociado} from './recurso-asociado.model';

@Injectable({
  providedIn: 'root'
})
export class RecursosAsociadosService {
  API_URL = environment.apiUrl + 'detallered/recursos/';
  private recursosAsociados: Array<RecursoAsociado> = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  getRecursosAsociados(idRed: number): Observable<RecursoAsociado[]> {
    let params = new HttpParams();
    params = params.append('red_id', idRed.toString());
    this.recursosAsociados = [];
    this.httpClient.get(this.API_URL, {params} ).subscribe((data: Array<any>) => {
      data.forEach(dataItem => {
        const recurso = new RecursoAsociado();
        recurso.id = dataItem.pk;
        recurso.name = dataItem.fields.name;
        recurso.typeFormat = dataItem.fields.typeFormat;
        this.recursosAsociados.push(recurso);
      });
    });
    return of(this.recursosAsociados);
  }
}
