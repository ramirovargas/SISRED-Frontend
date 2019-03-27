import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import {Metadata} from './metadata.model';


@Injectable({
  providedIn: 'root'
})
export class MetadataService {
  API_URL = environment.apiUrl + 'detallered/metadata/';
  private metadata: Array<Metadata> = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  getMetadata(idRed: number): Observable<Metadata[]> {
    let params = new HttpParams();
    params = params.append('red_id', idRed.toString());
    this.metadata = [];
    this.httpClient.get(this.API_URL, {params} ).subscribe((data: Array<any>) => {
      data.forEach(dataItem => {
        const meta = new Metadata();
        meta.tag = dataItem.fields.tag;
        this.metadata.push(meta);
      });
    });
    return of(this.metadata);
  }
}
