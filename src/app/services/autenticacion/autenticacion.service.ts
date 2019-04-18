import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as crypto from 'crypto-js';
import { DatosUsuario } from 'src/app/models/datos-usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  constructor(private http: HttpClient) {}

  public autenti = false;

  autenticado(): boolean {
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token') !== null;
  }

  obtenerToken() {
    const token = localStorage.getItem('token');
    if (token === null) {
      this.borrarDatos();
    }
    return token;
  }

  obtenerDatosUsuario(): DatosUsuario {
    let datosUsuario = null;
    const token = this.obtenerToken();
    const usuarioTexto = localStorage.getItem('SISRED');
    if (usuarioTexto === null) {
      this.borrarDatos();
      window.location.reload();
    } else {
      try {
        const usuario = JSON.parse(
          crypto.AES.decrypt(usuarioTexto, token).toString(crypto.enc.Utf8)
        );

        datosUsuario = {
          nombre: usuario.firstName,
          apellido: usuario.lastName,
          idConectate: usuario.idConectate,
          email: usuario.email,
          numeroIdentificacion: usuario.numeroIdentificacion
        };
      } catch (err) {
        this.borrarDatos();
        window.location.reload();
      }
    }
    return datosUsuario;
  }

  login(username, password) {
    return new Promise((resolve, reject) => {
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      this.http
        .post(
          environment.apiUrl + 'login/',
          {
            username,
            password
          },
          options
        )
        .subscribe(
          data => {
            resolve(data);
          },
          err => {
            reject(err.error.error);
          }
        );
    });
  }

  guardarDatos(data, email) {
    const token = data.token;
    localStorage.setItem('token', token);
    delete data.token;
    data.email = email;

    console.log(data);

    localStorage.setItem(
      'SISRED',
      crypto.AES.encrypt(JSON.stringify(data), token).toString()
    );
  }

  // Elimina los datos de la sesión. Borrando el local storage
  borrarDatos() {
    localStorage.clear();
    window.location.reload();
  }
}
