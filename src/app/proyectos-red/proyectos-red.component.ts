import { Component, OnInit } from '@angular/core';
import {ProyectoRed} from "../services/proyectos-red/proyecto-red.model";
import {ProyectosRedService} from "../services/proyectos-red/proyectos-red.service";


@Component({
  selector: 'app-proyectos-red',
  templateUrl: './proyectos-red.component.html',
  styleUrls: ['./proyectos-red.component.css']
})
export class ProyectosRedComponent implements OnInit {

  proyectos: ProyectoRed[];

  constructor(private proyectosRedService: ProyectosRedService) { }

  ngOnInit() {
    this.getProyectosRed();
  }

  getProyectosRed(): void {
    this.proyectosRedService.getProyectosRed(1)
      .subscribe(proyectos => this.proyectos = proyectos);
  }

}
