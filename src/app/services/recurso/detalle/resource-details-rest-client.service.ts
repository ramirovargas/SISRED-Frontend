import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UrlConstant } from 'src/app/constants/url-constant';
import { environment } from 'src/environments/environment';
import { AutenticacionService } from '../../autenticacion/autenticacion.service';

@Injectable()
export class ResourceDetailsRestClientService {
  constructor(
    private http: HttpClient,
    private autenticacionService: AutenticacionService
  ) {}

  getResourceDetailsById(id: number): Observable<any> {
    const tokenSisred = this.autenticacionService.obtenerToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + tokenSisred
    });

    return this.http
      .get(environment.apiUrl + UrlConstant.RESOURCE_DETAILS_ENDPOINT + id)
      .pipe(map(reponse => reponse));
  }

  updateResourceDetail(data: any): Observable<any> {
    const tokenSisred = this.autenticacionService.obtenerToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + tokenSisred
    });

    const json = {
      nombre: data.name,
      descripcion: data.description,
      usuario_ultima_modificacion: data.lastUserModification,
      id: data.id
    };

    return this.http
      .put(
        environment.apiUrl + UrlConstant.RESOURCE_DETAILS_UPDATE_ENDPOINT,
        json,
        { headers }
      )
      .pipe(map(reponse => reponse));
  }
}
