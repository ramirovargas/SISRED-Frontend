import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UrlConstant } from 'src/app/constants/url-constant';
import { environment } from 'src/environments/environment';
import {HttpHeaders} from "@angular/common/http";
import {AutenticacionService} from "src/app/services/autenticacion/autenticacion.service"



@Injectable()
export class HabilitarUsuarioClientService {

  constructor(
    private http: Http,
    private autentication: AutenticacionService
  ) { }
  User_Buscar(UserIde: string): Observable<any> {
    return this.http
      .get(environment.apiUrl + UrlConstant.USER_ENABLE_ENDPOINT +  UserIde)
      .pipe(map(reponse => reponse.json()));
  }

   User_Habilitar(UserIde: string): Observable<any> {
    const tokenSisred = this.autentication.obtenerToken();
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Token ' + tokenSisred
        })
      };
    return this.http
      .put(environment.apiUrl + UrlConstant.USER_ENABLE_ENDPOINT + UserIde,options)
      .pipe(map(reponse => reponse.json()));
  }
}
