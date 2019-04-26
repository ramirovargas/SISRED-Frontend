import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { RedAsignado } from './RedAsignado';
import { environment } from './../../../environments/environment';
import { HabilitarRed } from './HabilitarRed';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class RedVersionService {

  API_URL:string = environment.apiUrl + 'habilitar-red/';

  private reds: Array<HabilitarRed> = [];

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  getREDs(idUsuario: String) :Observable<HabilitarRed[]>{
    this.reds = [];
    this.httpClient.get(this.API_URL+idUsuario, httpOptions).subscribe((data: any) => {
      const red = new HabilitarRed();
      red.listo=data[0].listo;
      console.log(red.listo);
      this.reds.push(red);
    });
    return of(this.reds);
  }

}