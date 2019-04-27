import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsVersionVideoService {

  API_URL = environment.apiUrl + 'comentarios/video/';

  annotations: any[];
  recursoVideo: any[];
  constructor(private httpClient: HttpClient) { }

  // Metodo que invoca al servicio que obitiene los comentarios del video
  getCommentsVersionVideo(idRecurso: number): Observable<Array<any>> {
    this.annotations = [];
    this.httpClient.get(this.API_URL + idRecurso).subscribe((data: any) => {
      for (const entry of data) {
          this.annotations.push(entry);
      }
    });
    return of(this.annotations);
  }

  // Metodo que invoca al servicio que obitiene los comentarios del video
  addVideoComments(idVersion: number, idRecurso: number, commentsDetail: object) {
    this.httpClient.post(this.API_URL + idVersion + '/' + idRecurso, commentsDetail).subscribe((data: any) => {

    });
  }

  // Metodo que invoca al servicio que obitiene la url del recurso video
  getUrlRecursoVideo(idRecurso: number): Observable<Array<any>> {
    this.recursoVideo = [];
    this.httpClient.get(this.API_URL + 'url/' + idRecurso).subscribe((data: any) => {
      for (const dataItem of data) {
          this.recursoVideo.push(dataItem);
      }
    });
    return of(this.recursoVideo);
  }

}
