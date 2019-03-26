import { Component, OnInit } from '@angular/core';
import { ProyectoConectate } from '../proyectoConectate';
import { Red } from '../red';
import { PROYECTO_CONECTATE } from '../mock-proyecto-conectate';
import { REDS } from '../mock-reds';

@Component({
  selector: 'app-avance-proyecto-conectate',
  templateUrl: './avance-proyecto-conectate.component.html',
  styleUrls: ['./avance-proyecto-conectate.component.css']
})
export class AvanceProyectoConectateComponent implements OnInit {
  proyecto : ProyectoConectate = PROYECTO_CONECTATE
  reds: Red[] = REDS

  constructor() { }

  ngOnInit() {
  }

}
