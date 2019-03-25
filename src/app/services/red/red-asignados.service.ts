import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class RedAsignadosService {
  
  API_URL = 'http://127.0.0.1:8000/api/reds/asignados/';

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

}
