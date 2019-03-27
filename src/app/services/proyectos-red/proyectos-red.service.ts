import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import {ProyectoRed} from './proyecto-red.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosRedService {
  API_URL = environment.apiUrl + 'detallered/proyectos/';
  private proyectosRed: Array<ProyectoRed> = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  getProyectosRed(idRed: number): Observable<ProyectoRed[]> {
    let params = new HttpParams();
    params = params.append('red_id', idRed.toString());
    this.proyectosRed = [];
    this.httpClient.get(this.API_URL, {params} ).subscribe((data: Array<any>) => {
      data.forEach(dataItem => {
        const pro = new ProyectoRed();
        pro.id = dataItem.pk;
        pro.autor = dataItem.fields.autor;
        pro.typeFile = dataItem.fields.typeFile;
        pro.createdDate = dataItem.fields.createdDate;
        pro.description = dataItem.fields.description;
        this.proyectosRed.push(pro);
      });
    });
    return of(this.proyectosRed);
  }
}
