import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Red } from '../../services/red/red';

declare function setup(): any;

@Component({
  selector: 'app-buscar-red',
  templateUrl: './buscar-red.component.html',
  styleUrls: ['./buscar-red.component.css']
})
export class BuscarRedComponent implements OnInit {

  public buscarRedForm: FormGroup;
  userId: number = 4;
  reds: Red[] = [];
  pagina: number = 1;
  paginaSize: number = 5;

  constructor() { }

  ngOnInit() {
    setup();
    this.buscarRedForm = new FormGroup({
      fechaInicio: new FormControl(),
      fechaCierre: new FormControl(),
      palabra: new FormControl(),
    });
  }

  buscarRed() {
    this.reds = [{
      id: '1',
      nombre: 'mi red',
      nombreCorto: 'mi red',
      descripcion: 'esta es una descripción',
      fechaInicio: '2019-02-12',
      fechaCierre: '2019-04-22',
      fechaCreacion: 'string',
      porcentajeAvance: 1,
      tipo: '3',
      solicitante: 'string',
      horasTrabajadas: 1,
      horasEstimadas: 1,
      proyectoConectate: undefined,
      historialEstados: undefined,
      fase: 'string',
    },];
    console.log({
      fechaInicio: this.buscarRedForm.get('fechaInicio').value,
      fechaCierre: this.buscarRedForm.get('fechaCierre').value,
      palabra: this.buscarRedForm.get('palabra').value,
    });
  }

}
