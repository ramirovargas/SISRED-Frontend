import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-subir-red',
  templateUrl: './subir-red.component.html',
  styleUrls: ['./subir-red.component.css']
})
export class SubirREDComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

export class ProyectoRED {
  nombre: string;
  tipo: string;
  carpeta: string;
}

export class Recurso {
  nombre: string;
  archivo: string;
  descripcion: string;
  thumbnail: string;
  fechaCreacion: DatePipe;
  fechaUltimaModificacion: DatePipe;
  tipo: string;
}

export class RED {
  codigo: string;
  nombre: string;
  nombreCorto: string;
  descripcion: string;
  fechaInicio: DatePipe;
  fechaCierre: DatePipe;
  fechaCreacion: DatePipe;
  porcentajeAvance: bigint;
  tipo: string;
  solicitante: string;
  horasEstimadas: bigint;
  horasTrabajadas: bigint;
}
