import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { RedAsignado, RED } from './RedAsignado';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class RedAsignadosService {
  
  API_URL = 'http://127.0.0.1:8000/api/reds/asignados/2';

  private reds: Array<RED> = [];

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  getREDs(): Observable<RedAsignado> {
    this.reds = [];
    let redAsignado = new RedAsignado();
    this.httpClient.get(this.API_URL).subscribe((data: Array<any>) => {
      redAsignado.nombreUsuario = data[0].nombreUsuario;
      data.forEach(dataItem => {
        const red = new RED();
        red.id = dataItem.id;
        red.nombre = dataItem.nombre;
        red.rol = dataItem.rol;
        this.reds.push(red);
      });
    });
    console.log(redAsignado);
    return of(redAsignado);
  }

}
