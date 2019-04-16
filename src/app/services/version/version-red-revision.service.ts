import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { UrlConstant } from 'src/app/constants/url-constant';
import { Version } from './version.model'
import { Recurso } from './recurso.model'

@Injectable({
  providedIn: 'root'
})
export class VersionRedRevisionService {
  API_URL = environment.apiUrl +  'post_proyecto_red/';
  private version: Version = new Version();
  private recursos: Array<Recurso> = [];

  constructor(private httpClient: HttpClient) { 

  }

  getVersionInfo(id: number): Observable<Version> {
    let params = new HttpParams();
    params = params.append('id', id.toString());
    
    this.httpClient.get(this.API_URL, {params}).subscribe((data: any) => {
      this.version.id = data.id;
      this.version.imagen = data.imagen;
      this.version.numero = data.numero;
      this.version.recursos = data.recursos;
      this.version.red = data.red;    
    });

    return of(this.version)
  }
}
