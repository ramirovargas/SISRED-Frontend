import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';

declare function setup(): any;

@Component({
  selector: 'app-buscar-recurso',
  templateUrl: './buscar-recurso.component.html',
  styleUrls: ['./buscar-recurso.component.css']
})
export class BuscarRecursoComponent implements OnInit {

  public buscarRecursoForm: FormGroup;
  private recursos = [];
  pagina: number = 1;
  paginaSize: number = 5;

  constructor() {
  }

  ngOnInit() {
    setup();
    this.buscarRecursoForm = new FormGroup({
      fechaDesde: new FormControl(),
      fechaHasta: new FormControl(),
      text: new FormControl(),
    });
  }

}
