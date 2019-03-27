import { Component, OnInit } from '@angular/core';
import { ProyectoConectate } from '../proyectoConectate';
import { Red } from '../red';
import { RolAsignado } from '../rolAsignado';
import { PersonasPorRol } from '../personasPorRol';
import { PROYECTO_CONECTATE } from '../mock-proyecto-conectate';
import { REDS } from '../mock-reds';
import { ASIGNACIONES } from '../mock-asignaciones';
import { ROLES } from '../roles';

@Component({
  selector: 'app-avance-proyecto-conectate',
  templateUrl: './avance-proyecto-conectate.component.html',
  styleUrls: ['./avance-proyecto-conectate.component.css']
})
export class AvanceProyectoConectateComponent implements OnInit {
  proyecto : ProyectoConectate = PROYECTO_CONECTATE
  reds: Red[] = REDS
  asignaciones: RolAsignado[] = ASIGNACIONES
  difMeses: number
  personas: PersonasPorRol[]
  roles: string[] = ROLES

  initPersonasPorRol() {
    let fechaInicio = new Date(this.proyecto.fechaInicio);
    let fechaActual = new Date();
    this.difMeses = this.getDifMeses(fechaInicio, fechaActual);
    this.personas = [];
    
    for(let i = 0; i<=this.difMeses; i++) {
      this.personas = this.personas.concat({
        graficadores: 0,
        disenadores: 0,
        desarrolladores: 0,
        editores: 0,
        pensadores: 0,
      });
    }
    for(let asig of this.asignaciones) {
      let fechaInicioAsig = new Date(asig.fechaInicio);
      let fechaFinAsig = asig.fechaFin==='' ? fechaActual : new Date(asig.fechaFin);
      let difInicioAsig = this.getDifMeses(fechaInicio, fechaInicioAsig);
      let difFinAsig = this.getDifMeses(fechaInicio, fechaFinAsig);
      
      for(let p of this.personas) {
        if(difInicioAsig<=0 && difFinAsig>=0) {
          console.log('llega?');
          if(asig.rol === this.roles[0]) {
            p.graficadores++;
          }
          else if(asig.rol === this.roles[1]) {
            p.disenadores++;
          }
          else if(asig.rol === this.roles[2]) {
            p.desarrolladores++;
          }
          else if(asig.rol === this.roles[3]) {
            p.editores++;
          }
          else if(asig.rol === this.roles[4]) {
            p.pensadores++;
          }
        }
        difInicioAsig--;
        difFinAsig--;
        
      }
    }
    console.log(this.personas);
  }

  constructor() { }

  ngOnInit() {
    this.initPersonasPorRol();
  }

  getDifMeses(fechaInicio: Date, fechaFin: Date) {
    return fechaFin.getMonth()-fechaInicio.getMonth()+12*(fechaFin.getFullYear()-fechaInicio.getFullYear());
  }

}
