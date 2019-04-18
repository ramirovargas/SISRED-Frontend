import { Component, OnInit, Input } from '@angular/core';
import { DatosUsuario } from 'src/app/models/datos-usuario';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Input() usuario: DatosUsuario;

  public link = '';

  constructor() {}

  ngOnInit() {
    this.link = '/reds/' + this.usuario.idConectate;
  }
}
