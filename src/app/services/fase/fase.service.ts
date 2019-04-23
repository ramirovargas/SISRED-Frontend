import { Injectable } from '@angular/core';
import { Fase } from './fase.model';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { HttpResponse, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { resolve } from 'q';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})

export class FaseService {
  private fases: Array<Fase> = [];
  private respuestaFase: string;

  constructor(
    private httpClient: HttpClient
  ) { }

  // Metodo que invoca al servicio que obtiene las fases
  getFases(): Observable<Fase[]> {
    this.fases = [];
    this.httpClient.get(environment.apiUrl + 'fases/').subscribe((data: Array<any>) => {
      data.forEach(dataItem => {
        const fase = new Fase();
        fase.idConectate = dataItem.id_conectate;
        fase.nombre = dataItem.nombre_fase;
        this.fases.push(fase);
      });
    });
    return of(this.fases);
  }

  // Método que invoca el servicio para cambiar fase
  cambiarFase(idRed, idFase) {
    return new Promise((resolve, reject) => {
      this.httpClient.put(environment.apiUrl + 'red/' + idRed + '/cambiarfase/' + idFase + '/', null, httpOptions).subscribe(data => resolve(data), error => {
        reject(error);
      });
    });
  }
}
