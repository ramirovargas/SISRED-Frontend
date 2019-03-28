import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RedAsignadosService } from '../../services/red/red-asignados.service';
import { RedAsignado } from "../../services/red/RedAsignado";

@Component({
  selector: 'app-red-asignados',
  templateUrl: './red-asignados.component.html',
  styleUrls: ['./red-asignados.component.css']
})
export class RedAsignadosComponent implements OnInit {

  redsAsignados: RedAsignado[] = null;

  private ID_USUARIO: number = 2; //TODO Temporal.

  constructor(private activatedRoute: ActivatedRoute,
              private redAsignadosService: RedAsignadosService) {

  }

  ngOnInit() {
    this.getREDsAsignados();
  }

  getREDsAsignados(): void {
    this.redAsignadosService.getREDs(this.ID_USUARIO).subscribe(redsAsignado => this.redsAsignados = redsAsignado);
  }

}

