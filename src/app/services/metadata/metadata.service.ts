import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Metadata } from './metadata.model';
import { AutenticacionService } from '../autenticacion/autenticacion.service';
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {promise} from "selenium-webdriver";
import {reject} from "q";

@Injectable({
  providedIn: 'root'
})
export class MetadataService {
  API_URL = environment.apiUrl + 'detallered/metadata/';
  private metadata: Array<Metadata> = [];

  constructor(
    private httpClient: HttpClient,
    private autenticacionService: AutenticacionService,
  ) {}

  // Metodo que invoca al servicio que obtiene la metadata del RED
  getMetadata(idRed: number): Observable<Metadata[]> {
    const tokenSisred = this.autenticacionService.obtenerToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + tokenSisred
    });

    let params = new HttpParams();
    params = params.append('RED', idRed.toString());
    this.metadata = [];
    this.httpClient
      .get(this.API_URL, { headers, params })
      .subscribe((data: Array<any>) => {
        data.forEach(dataItem => {
          const meta = new Metadata();
          meta.tag = dataItem.tag;
          this.metadata.push(meta);
        });
      });
    return of(this.metadata);
  }

  //Servicio para agregar metadata a un recurso
    addMetadataRecurso(
    idRecurso: number,
    tag: string
  ) {
    const tokenSisred = this.autenticacionService.obtenerToken();
    return new Promise((resolve, reject) => {
      if (
        idRecurso === 0 ||
        tag === ''
      ) {
        reject('Datos Invalidos');
      } else {
        const options = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
          })
        };

        const requestBody = {
          tag
        };

        this.httpClient
          .post(environment.apiUrl + 'addMetadataRecurso/' + idRecurso + '/', requestBody, options)
          .subscribe(
            (data: any) => {
              resolve(data);
            },
            err => {
              console.log(err);
              reject(err);
            }
          );
      }
    });
  }




}
