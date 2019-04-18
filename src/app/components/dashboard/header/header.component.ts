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

  cerrarSesion() {
    this.autenticacionService.borrarDatos();
  }
}
