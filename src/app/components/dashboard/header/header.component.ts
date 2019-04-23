import { Component, OnInit, Input } from '@angular/core';
import { DatosUsuario } from 'src/app/models/datos-usuario';
import { AutenticacionService } from 'src/app/services/autenticacion/autenticacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() usuario: DatosUsuario;

  constructor(private autenticacionService: AutenticacionService) {}

  ngOnInit() {}

  // Se invoca el método que borra los datos de la sesión
  cerrarSesion() {
    this.autenticacionService
      .cerrarSesion()
      .then(data => {
        console.log(data);
        this.autenticacionService.borrarDatos();
      })
      .catch(err => {
        console.log(err);
        this.autenticacionService.borrarDatos();
      });
  }
}
