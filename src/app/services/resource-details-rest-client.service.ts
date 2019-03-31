import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UrlConstant } from "../constants/url-constant";

@Injectable()
export class ResourceDetailsRestClientService {
  constructor(private http: Http) { }

  getResourceDetailsById(id: number): Observable<any> {
    return this.http
      .get(UrlConstant.SERVER_URL + UrlConstant.RESOURCE_DETAILS_ENDPOINT + id)
      .pipe(map(reponse => reponse.json()));
  }

  updateResourceDetail(data: any): Observable<any> {
    const json = { "nombre": data.description, "descripcion": data.name, "usuario_ultima_modificacion": data.lastUserModification };
    return this.http
      .put(UrlConstant.SERVER_URL + UrlConstant.RESOURCE_DETAILS_UPDATE_ENDPOINT, json)
      .pipe(map(reponse => reponse.json()));
  }
}
