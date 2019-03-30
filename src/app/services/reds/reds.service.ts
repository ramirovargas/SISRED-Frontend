import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RedsService {

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
}
