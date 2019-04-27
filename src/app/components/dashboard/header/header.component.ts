import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NotificacionesService } from '../../../services/revision/revision.service';
import { Notificacion } from "../../../services/revision/revision.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  notificaciones : Array<Notificacion> = [];
  idUsuario: String;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private notificacionesService: NotificacionesService
  ) { }

  ngOnInit() {    
    this.getNotificaciones()
  }

  getNotificaciones(){
    this.notificacionesService.getNotificaciones().subscribe(notificaciones => this.notificaciones = notificaciones);
  }
}
