import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlConstant } from 'src/app/constants/url-constant';
import { AutenticacionService } from '../autenticacion/autenticacion.service';

@Injectable({
  providedIn: 'root'
})

/**
 * Se declara la variable HttpClient para la configuración de la ruta de la pagina y autenticación
 **/
export class AdvanceRedRestClientService {
  constructor(
    private http: HttpClient,
    private autenticacionService: AutenticacionService
  ) {}

  /**
   * metodo para obtener el objeto red y sus fases
   * @param id es el id del red a buscar
   */
  getAdvanceRedById(id: number): Observable<any> {
    const tokenSisred = this.autenticacionService.obtenerToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + tokenSisred
    });

    return this.http
      .get(environment.apiUrl + UrlConstant.ADVANCE_RED_ENDPOINT + id, {
        headers
      })
      .pipe(map(reponse => reponse));
  }
}
