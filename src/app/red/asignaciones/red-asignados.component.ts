import { Component, OnInit } from '@angular/core';
import { RedAsignadosService } from '../../services/red/red-asignados.service';
import {RED, RedAsignado} from "../../services/red/RedAsignado";
import {Observable} from "rxjs";

@Component({
  selector: 'app-red-asignados',
  templateUrl: './red-asignados.component.html',
  styleUrls: ['./red-asignados.component.css']
})
export class RedAsignadosComponent implements OnInit {

  private infoAsignacion: Observable<RedAsignado> = null;

  constructor(private redAsignadosService: RedAsignadosService) {

  }

  ngOnInit() {
     this.infoAsignacion = this.redAsignadosService.getREDs();
  }

}

