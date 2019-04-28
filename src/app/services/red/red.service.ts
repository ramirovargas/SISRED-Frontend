import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { AutenticacionService } from '../autenticacion/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class RedService {
  httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });

  constructor(
    private http: HttpClient,
    private autenticacionService: AutenticacionService
  ) {}

  getRedsRelacionados(idProyectoC) {
    return new Promise((resolve, reject) => {
      const tokenSisred = this.autenticacionService.obtenerToken();

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token ' + tokenSisred
      });

      this.http
        .get(environment.apiUrl + 'reds/relacionados/' + idProyectoC, {
          headers
        })
        .subscribe(
          (data: any) => {
            resolve(data);
          },
          err => {
            console.log(err);
            reject('There was an error getting the related reds');
          }
        );
    });
  }

  getRedRecursosDetalle(id): Observable<any> {
    const tokenSisred = this.autenticacionService.obtenerToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + tokenSisred
    });

    return this.http.get(environment.apiUrl + 'getRedDetailRecursos/' + id, {
      headers
    });
  }
}
