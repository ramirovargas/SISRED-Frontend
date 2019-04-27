import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RedAsignadosService } from '../../../services/red/red-asignados.service';
import { RedAsignado } from "../../../services/red/RedAsignado";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  notificaciones : String[] = ["Prueba1", "Prueba2", "Prueba3"];
  idUsuario: String;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private redAsignadosService: RedAsignadosService
  ) { }

  ngOnInit() {    
    this.idUsuario = this.activatedRoute.snapshot.params.idUsuario; //TODO Temporal.    
  }

}
