import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsVersionVideoService {

  API_URL = environment.apiUrl + 'comentarios/video/';

  annotations: any;
  constructor(private httpClient: HttpClient) { }

  // Metodo que invoca al servcio que obitiene los comentarios del video
  getCommentsVersionVideo(idRecurso: number): Array<any> {
    this.httpClient.get(this.API_URL + idRecurso).subscribe((data: any) => {
      this.annotations = data;
    });
    return this.annotations;
  }

  // Metodo que invoca al servcio que obitiene los comentarios del video
  addVideoComments(idRecurso: number, commentsDetail: object) {
    this.httpClient.post(this.API_URL + idRecurso, commentsDetail).subscribe((data: any) => {

    });
  }

}
