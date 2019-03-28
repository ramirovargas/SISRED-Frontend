import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProyectoRed} from "../services/proyectos-red/proyecto-red.model";
import {ProyectosRedService} from "../services/proyectos-red/proyectos-red.service";


@Component({
  selector: 'app-proyectos-red',
  templateUrl: './proyectos-red.component.html',
  styleUrls: ['./proyectos-red.component.css']
})
export class ProyectosRedComponent implements OnInit {

  proyectos: ProyectoRed[];
  idRed: number;
  constructor(private route: ActivatedRoute,
              private proyectosRedService: ProyectosRedService) { }

  ngOnInit() {
    this.idRed = this.route.snapshot.params['idRed'];
    this.getProyectosRed();
  }

  getProyectosRed(): void {
    this.proyectosRedService.getProyectosRed(this.idRed)
      .subscribe(proyectos => this.proyectos = proyectos);
  }

}
