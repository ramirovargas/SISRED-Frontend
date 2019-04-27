import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Notificacion} from './revision.model';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  API_URL ='http://127.0.0.1:8000/api/notificaciones/2';
  private notificaciones: Array<Notificacion> = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  // Metodo que invoca y formatea las notificaciones en el modelo definido en el forntend.
  getNotificaciones(): Observable<Notificacion[]> {
    this.notificaciones = [];      
    this.httpClient.get(this.API_URL).subscribe((data: Array<any>) => {
      data.forEach(dataItem => {
        const noti = new Notificacion();          
        noti.mensaje = dataItem.mensaje;
        noti.red = dataItem.red;
        noti.rol = dataItem.rol;
        noti.fecha = dataItem.fecha;           
        this.notificaciones.push(noti);
      });
    });
    return of(this.notificaciones);
  }
}
