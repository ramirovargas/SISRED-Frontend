import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { PersonaAsignada } from './persona-asignada.model';
import { AutenticacionService } from '../../autenticacion/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class PersonasAsignadasService {
  API_URL = environment.apiUrl + 'detallered/personas/';
  private personasAsignadas: Array<PersonaAsignada> = [];

  constructor(
    private httpClient: HttpClient,
    private autenticacionService: AutenticacionService
  ) {}

  // Metodo que invoca al servicio que obtiene las personas asignadas al RED
  getPersonasAsignadas(idRed: number): Observable<PersonaAsignada[]> {
    const tokenSisred = this.autenticacionService.obtenerToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + tokenSisred
    });

    let params = new HttpParams();
    params = params.append('RED', idRed.toString());
    this.personasAsignadas = [];
    this.httpClient
      .get(this.API_URL, { headers, params })
      .subscribe((data: Array<any>) => {
        data.forEach(dataItem => {
          const per = new PersonaAsignada();
          per.name = dataItem.name;
          per.rol = dataItem.rol;
          this.personasAsignadas.push(per);
        });
      });
    return of(this.personasAsignadas);
  }
}
