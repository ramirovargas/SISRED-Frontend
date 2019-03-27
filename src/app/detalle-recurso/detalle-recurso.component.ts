import { Component, OnInit } from '@angular/core';
import { ResourceDetailModel } from './detalle-recurso.component.model';

@Component({
  selector: 'app-detalle-recurso',
  templateUrl: './detalle-recurso.component.html',
  styleUrls: ['./detalle-recurso.component.css']
})
export class DetalleRecursoComponent implements OnInit {

  constructor() { }


  resourceDetailsoModel: ResourceDetailModel = {
    type: 'png',
    author: "Cristian Sepulveda",
    creationDate: new Date(),
    modificationDate: new Date(),
    responsable: 'Adriana',
    description: 'Esto es un mock de ejemplo donde puede tener una descripcion muy larga de detalle del recurso',
    metadata: ['Universidad', 'Videos', 'Util']
  }

  ngOnInit() {
    this.loadMock();
  }


  public loadMock() {

  }

}
