import { Injectable } from '@angular/core';
import { Notificacion } from './notificacion.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AutenticacionService } from '../autenticacion/autenticacion.service';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  private notificaciones: Array<Notificacion> = [];
  private numeroNoVisto: number;

  constructor(
    private httpClient: HttpClient,
    private autenticacionService: AutenticacionService
  ) { }

  // Metodo que invoca al servicio que obtiene las notificaciones
  getNotificacionesUsuario(): Observable<Notificacion[]> {
    const tokenSisred = this.autenticacionService.obtenerToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + tokenSisred
    });

    this.notificaciones = [];
    this.httpClient.get(environment.apiUrl + 'notificaciones/'+this.autenticacionService.obtenerDatosUsuario().idConectate.toString()+'/', {headers}).subscribe((data: Array<any>) => {
      data.forEach(dataItem => {
        const notificacion = new Notificacion();
        notificacion.id = dataItem.id;
        notificacion.mensaje = dataItem.mensaje;
        notificacion.idRed = dataItem.idRed;
        notificacion.nombreRed = dataItem.nombreRed;
        notificacion.tipo = dataItem.tipo;
        notificacion.visto = dataItem.visto;
        this.notificaciones.push(notificacion);
      });
    });
    return of(this.notificaciones);
  }

  // Metodo que invoca al servicio que obtiene el numero de notificacion no vistas
  getNumeroNotificacionesNoVistas(){
    const tokenSisred = this.autenticacionService.obtenerToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + tokenSisred
    });

    return new Promise((resolve, reject) => {
      this.httpClient.get(environment.apiUrl + 'notificaciones/9/novistos/', {headers}).subscribe((data: number) => {
        this.numeroNoVisto = data;
        resolve(this.numeroNoVisto);
      });
      return of(this.numeroNoVisto);
    });
  }

  // Método que invoca el servicio para cambiar visto a notificacion
  cambiarNotificacionAVisto(idNotificacion) {
    const tokenSisred = this.autenticacionService.obtenerToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + tokenSisred
    });

    return new Promise((resolve, reject) => {
      this.httpClient.put(environment.apiUrl + 'putNotification/' + idNotificacion + '/', headers).subscribe(data => resolve(data), error => {
        reject(error);
      });
    });
  }
}
