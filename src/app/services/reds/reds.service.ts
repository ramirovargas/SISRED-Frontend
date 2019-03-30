import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedsService {

baseurl = "http://localhost:8000"
httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient) {}

  getRedsRelacionados(proyectoConectate) {
    return new Promise((resolve, reject) => {
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      this.http
        .get(environment.requestBase + '/api/reds/relacionados/' + proyectoConectate.id, options)
        .subscribe(
          (data: any) => {
            resolve(data);
          },
          err => {
            console.log(err);
            reject('There was an error getting the related reds');
          }
        );
    });
  }

  getRedDetail(id): Observable<any>{
    return this.http.get(this.baseurl + '/api/getRedDet/' + id, {headers: this.httpHeaders})
  }

}


