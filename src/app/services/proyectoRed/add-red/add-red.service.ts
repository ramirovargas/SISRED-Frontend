import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { RedProject } from './RedProject';
import { environment } from './../../../../environments/environment';
import { AutenticacionService } from '../../autenticacion/autenticacion.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddRedService {
  API_URL = environment.apiUrl + 'post_proyecto_red/';

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private autenticacionService: AutenticacionService
  ) {}

  //Método que invoca el servicio al cual se sube la información del nuevo proyecto
  addRed(
    name: String,
    type: String,
    author: String,
    description: String,
    folder: String,
    redId: String
  ): Observable<any> {
    const tokenSisred = this.autenticacionService.obtenerToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + tokenSisred
    });

    var obj = {
      nombre: name,
      tipo: type,
      autor: author,
      descripcion: description,
      carpeta: folder,
      RED: redId
    };
    this.httpClient
      .post(this.API_URL, JSON.stringify(obj), { headers })
      .subscribe((data: Response) => {
        if (data[0].fields.nombre == name) {
        } else {
        }
      });
    //this.router.navigate(['/']);
    return of(obj);
  }
}
