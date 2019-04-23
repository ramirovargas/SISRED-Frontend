import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Metadata } from './metadata.model';
import { AutenticacionService } from '../autenticacion/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class MetadataService {
  API_URL = environment.apiUrl + 'detallered/metadata/';
  private metadata: Array<Metadata> = [];

  constructor(
    private httpClient: HttpClient,
    private autenticacionService: AutenticacionService
  ) {}

  // Metodo que invoca al servicio que obtiene la metadata del RED
  getMetadata(idRed: number): Observable<Metadata[]> {
    const tokenSisred = this.autenticacionService.obtenerToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + tokenSisred
    });

    let params = new HttpParams();
    params = params.append('RED', idRed.toString());
    this.metadata = [];
    this.httpClient
      .get(this.API_URL, { headers, params })
      .subscribe((data: Array<any>) => {
        data.forEach(dataItem => {
          const meta = new Metadata();
          meta.tag = dataItem.tag;
          this.metadata.push(meta);
        });
      });
    return of(this.metadata);
  }
}
