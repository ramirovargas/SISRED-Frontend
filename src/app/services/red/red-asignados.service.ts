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
    this.httpClient.get(this.API_URL, httpOptions).subscribe((data: any) => {
      console.log(data);
      redAsignado.nombreUsuario = data.nombreUsuario;
      data.redsAsignados.forEach(dataItem => {
        const red = new RED();
        red.id = dataItem.idRed;
        red.nombre = dataItem.nombreRed;
        red.rol = dataItem.rol;
        this.reds.push(red);
      });
      redAsignado.redsAsignados = this.reds;
    });
    console.log(redAsignado);
    return of(redAsignado);
  }

}
