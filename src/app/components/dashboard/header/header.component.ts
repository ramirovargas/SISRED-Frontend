import { Router, ActivatedRoute, Params } from '@angular/router';
import { RevisionesService } from '../../../services/revision/revision.service';
import { Revision } from "../../../services/revision/revision.model";
import { Component, OnInit, Input } from '@angular/core';
import { DatosUsuario } from 'src/app/models/datos-usuario';
import { AutenticacionService } from 'src/app/services/autenticacion/autenticacion.service';
import { NotificacionService } from 'src/app/services/notificacion/notificacion.service';
import { Notificacion } from '../../../services/notificacion/notificacion.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  notificaciones: Notificacion[];
  numeroNoVisto: number;
  @Input() usuario: DatosUsuario;

  revisiones : Array<Revision> = [];
  idUsuario: String;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private revisionesService: RevisionesService,
    private autenticacionService: AutenticacionService,
    private notificacionService: NotificacionService
  ) { }

  ngOnInit() {    
    this.getRevisiones()
    this.obtenerNumeroNotificacionesNoVistos();
  }

  getRevisiones(){
    this.revisionesService.getRevisiones().subscribe(revisiones => this.revisiones = revisiones);
  }

  ultimo(rev: Revision){
    if(rev == this.revisiones[this.revisiones.length]) return true
    return false
  }
  // Se invoca el método que borra los datos de la sesión
  cerrarSesion() {
    this.autenticacionService
      .cerrarSesion()
      .then(data => {
        console.log(data);
        this.autenticacionService.borrarDatos();
      })
      .catch(err => {
        console.log(err);
        this.autenticacionService.borrarDatos();
      });
  }

  //Se invoca el metodo para obtener las notificaciones
  obtenerNotificaciones(){
    this.notificacionService.getNotificacionesUsuario().subscribe(notificaciones => this.notificaciones = notificaciones);
  }

  //Se invoca el metodo para obtener el numero de notificaciones no vistos
  obtenerNumeroNotificacionesNoVistos(){
    this.notificacionService.getNumeroNotificacionesNoVistas().then((data: number) => this.numeroNoVisto = data);
  }

  //Se invoca para actualizar que la notificacion ya fue vista
  cambiarNotificacionAVisto(idNotificacion, visto){
    if(!visto){
    this.notificacionService.cambiarNotificacionAVisto(idNotificacion)
      .then(data => {
        console.log('message', data);
      });
    }
  }
}
