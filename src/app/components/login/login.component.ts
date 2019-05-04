import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public correo = '';

  public contrasena = '';

  public enviado = false;

  public cargando = false;

  public mensajeError = '';

  constructor(
    private autenticacionService: AutenticacionService,
    private router: Router
  ) {}

  ngOnInit() {}

  // Función que inicia sesión para un usuario
  login() {
    this.enviado = true;
    this.mensajeError = '';
    if (this.correo !== '' && this.contrasena !== '') {
      this.cargando = true;
      this.autenticacionService
        .login(this.correo, this.contrasena)
        .then(data => {
          this.autenticacionService.guardarDatos(data, this.correo);
          window.location.reload();
        })
        .catch(err => {
          console.log(err);

          this.mensajeError = err;
          this.cargando = false;
        });
    }
  }
}
