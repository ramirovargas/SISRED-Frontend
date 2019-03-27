import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { DetalleRed } from './detalle-red.model';


@Injectable({
  providedIn: 'root'
})
export class DetalleRedService {
  API_URL = environment.apiUrl + 'detallered/';
  private detalleRed: DetalleRed = new DetalleRed();

  constructor(
    private httpClient: HttpClient
  ) { }

  getDetalleRed(idRed: number): Observable<DetalleRed> {
    let params = new HttpParams();
    params = params.append('red_id', idRed.toString());
    this.httpClient.get(this.API_URL, {params}).subscribe((data: Response) => {
      this.detalleRed.nameRed = data[0].fields.nameRed;
      this.detalleRed.nameProject = data[0].fields.nameProject;
      this.detalleRed.url = data[0].fields.url;
      this.detalleRed.status = data[0].fields.status;
    });
    return of(this.detalleRed);
  }
}
