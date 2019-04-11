import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Version} from './version.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import { environment } from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VersionService {
  API_URL = environment.apiUrl + 'detallered/metadata/';
  private versiones: Array<Version> = [];

  constructor(private httpClient: HttpClient) { }

    // Metodo que invoca al servicio que obtiene las versiones del RED
  getVersiones(idRed: number): Observable<Version[]> {
    let params = new HttpParams();
    params = params.append('RED', idRed.toString());
    this.versiones = [];
    const version1 = new Version();
    const version2 = new Version();
    version1.numero = 1;
    version2.numero = 2;
    version1.fecha = '12/03/2018';
    version2.fecha = '11/06/2017';
    version1.creadoPor = 'Juan Mendez';
    version2.creadoPor = 'Andrea Alvarez';
    version1.esFinal = true;
    version2.esFinal = false;
    version1.miniatura = '';
    version2.miniatura = '';
    this.versiones.push(version1);
    this.versiones.push(version2);

    /*this.httpClient.get(this.API_URL, {params} ).subscribe((data: Array<any>) => {
      data.forEach(dataItem => {
        const meta = new Metadata();
        meta.tag = dataItem.tag;
        this.metadata.push(meta);
      });
    });*/
    return of(this.versiones);
  }
}
