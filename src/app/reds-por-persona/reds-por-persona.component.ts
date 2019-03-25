import { Component, OnInit } from '@angular/core';
import { RolAsignado } from '../rolAsignado';
import { Usuario } from '../usuario';
import { Red } from '../red';
import { ASIGNACIONES } from '../mock-asignaciones';

@Component({
  selector: 'app-reds-por-persona',
  templateUrl: './reds-por-persona.component.html',
  styleUrls: ['./reds-por-persona.component.css']
})
export class RedsPorPersonaComponent implements OnInit {

  asignaciones: RolAsignado[] = ASIGNACIONES
  asignFiltradas: RolAsignado[] = []
  usuarios: Usuario[] = []

  initUsuarios() {
    for(let asign of this.asignaciones) {
      let usr = asign.usuario;
      if(this.usuarios.filter(u => u.numeroIdentificacion === usr.numeroIdentificacion).length===0) {
        this.usuarios = this.usuarios.concat(usr);
      }
    }
  }

  onChangeUsuario(id: string) {
    this.asignFiltradas = this.asignaciones.filter(asign => asign.usuario.numeroIdentificacion === id)
  }

  constructor() { }

  ngOnInit() {
    this.initUsuarios();
  }

}
