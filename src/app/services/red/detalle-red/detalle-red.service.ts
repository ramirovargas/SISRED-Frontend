import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { DetalleRed } from './detalle-red.model';
import { AutenticacionService } from '../../autenticacion/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class DetalleRedService {
  API_URL = environment.apiUrl + 'detallered/';
  private detalleRed: DetalleRed = new DetalleRed();

  constructor(
    private httpClient: HttpClient,
    private autenticacionService: AutenticacionService
  ) {}

  // Metodo que invoca al servicio que obtiene la informacion del RED
  getDetalleRed(idRed: number): Observable<DetalleRed> {
    const tokenSisred = this.autenticacionService.obtenerToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + tokenSisred
    });

    let params = new HttpParams();
    params = params.append('RED', idRed.toString());
    this.httpClient
      .get(this.API_URL, { headers, params })
      .subscribe((data: any) => {
        this.detalleRed.nameRed = data.nombreRed;
        this.detalleRed.nameProject = data.nombreProject;
        this.detalleRed.url = data.url;
        this.detalleRed.status = data.status;
      });
    return of(this.detalleRed);
}
