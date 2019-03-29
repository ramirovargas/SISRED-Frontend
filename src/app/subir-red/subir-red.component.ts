import { Component, ElementRef, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subir-red',
  templateUrl: './subir-red.component.html',
  styleUrls: ['./subir-red.component.css']
})
export class SubirREDComponent {

  form: FormGroup;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      comments: ['', Validators.required],
      REDFile: null
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('REDFile').setValue(file);
    }
  }

  private prepareSave(): any {
    const input = new FormData();
    input.append('comments', this.form.get('comments').value);
    input.append('REDFile', this.form.get('REDFile').value);
    return input;
  }

  onSubmit() {
    const formModel = this.prepareSave();
    // http post API URL goes here instead of the timer...
    setTimeout(() => {
      console.log(formModel.get('comments'));
      console.log(formModel.get('REDFile'));
      alert('done!');
    }, 1000);
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
