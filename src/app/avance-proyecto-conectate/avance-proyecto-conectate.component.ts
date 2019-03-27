import { Component, OnInit } from '@angular/core';
import { ProyectoConectate } from '../proyectoConectate';
import { Red } from '../red';
import { RolAsignado } from '../rolAsignado';
import { PersonasPorRol } from '../personasPorRol';
import { PROYECTO_CONECTATE } from '../mock-proyecto-conectate';
import { REDS } from '../mock-reds';
import { ASIGNACIONES } from '../mock-asignaciones';
import { ROLES } from '../roles';
import { ESTADOS } from '../estados';

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
  personas: PersonasPorRol[] = []
  roles: string[] = ROLES
  horasEstimadas: number = 0
  horasTrabajadas: number = 0
  estados: string[] = ESTADOS
  estadosRed: number[] = []

  initPersonasPorRol() {
    let fechaInicio = new Date(this.proyecto.fechaInicio);
    let fechaActual = new Date();
    this.difMeses = this.getDifMeses(fechaInicio, fechaActual);
    
    for(let i = 0; i<=this.difMeses; i++) {
      let roles = [];
      for(let i in this.roles) {
        roles = roles.concat(0);
      }
      this.personas = this.personas.concat({
        roles,
      });
    }
    for(let asig of this.asignaciones) {
      let fechaInicioAsig = new Date(asig.fechaInicio);
      let fechaFinAsig = asig.fechaFin==='' ? fechaActual : new Date(asig.fechaFin);
      let difInicioAsig = this.getDifMeses(fechaInicio, fechaInicioAsig);
      let difFinAsig = this.getDifMeses(fechaInicio, fechaFinAsig);
      
      for(let p of this.personas) {
        if(difInicioAsig<=0 && difFinAsig>=0) {
          for(let i in this.roles) {
            if(asig.rol === this.roles[i]) {
              p.roles[i]++;
              break;
            }
          }
        }
        difInicioAsig--;
        difFinAsig--;
        
      }
    }
  }

  initHoras() {
    for(let red of this.reds) {
      this.horasEstimadas += red.horasEstimadas;
      this.horasTrabajadas += red.horasTrabajadas;
    }
  }

  initEstadosRed() {
    for(let i in this.estados) {
      this.estadosRed = this.estadosRed.concat(0);
    }
    for(let red of this.reds) {
      let estadoRed = this.getEstadoRed(red);
      for(let i in this.estados) {
        if(estadoRed === this.estados[i]) {
          this.estadosRed[i]++;
          break;
        }
      }
    }
  }

  constructor() { }

  ngOnInit() {
    this.initPersonasPorRol();
    this.initHoras();
    this.initEstadosRed();
  }

  getDifMeses(fechaInicio: Date, fechaFin: Date) {
    return fechaFin.getMonth()-fechaInicio.getMonth()+12*(fechaFin.getFullYear()-fechaInicio.getFullYear());
  }

  getEstadoRed(red: Red) {
    let estadoActual = '';
    let fechaEstado;
    if(red.historialEstados && red.historialEstados.length !== 0) {
      estadoActual = red.historialEstados[0].nombreEstado;
      fechaEstado = new Date(red.historialEstados[0].fechaCambio);
    }
    for(let estado of red.historialEstados) {
      let nuevaFecha = new Date(estado.fechaCambio);
      if(nuevaFecha>fechaEstado) {
        estadoActual = estado.nombreEstado;
        fechaEstado = nuevaFecha;
      }
    }
    return estadoActual;
  }

}
