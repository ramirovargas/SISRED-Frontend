import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { UrlConstant } from '../constants/url-constant';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdvanceRedRestClientService {

  constructor(private http: Http) { }

  getAdvanceRed(): Observable<any> {
    return this.http
      .get(UrlConstant.SERVER_URL + UrlConstant.ADVANCE_RED_ENDPOINT)
      .pipe(map(reponse => reponse.json()));
  }
}
