import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {

baseurl = "http://localhost:8000"
httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient) { }

  getRecursos(id): Observable<any>{
    return this.http.get(this.baseurl + '/api/getRecurso/'+ id, {headers: this.httpHeaders})
  }
}
