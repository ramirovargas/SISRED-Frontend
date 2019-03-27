import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { PersonaAsignada } from './persona-asignada.model';


@Injectable({
  providedIn: 'root'
})
export class PersonasAsignadasService {
  API_URL = environment.apiUrl + 'detallered/personas/';
  private personasAsignadas: Array<PersonaAsignada> = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  getPersonasAsignadas(idRed: number): Observable<PersonaAsignada[]> {
    let params = new HttpParams();
    params = params.append('red_id', idRed.toString());
    this.personasAsignadas = [];
    this.httpClient.get(this.API_URL, {params} ).subscribe((data: Array<any>) => {
      data.forEach(dataItem => {
        const per = new PersonaAsignada();
        per.id = dataItem.pk;
        per.name = dataItem.fields.name;
        per.rol = dataItem.fields.rol;
        this.personasAsignadas.push(per);
      });
    });
    return of(this.personasAsignadas);
  }
}
