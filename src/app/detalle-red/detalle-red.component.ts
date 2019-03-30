import { Component, OnInit } from '@angular/core';
import { PersonasAsignadasService } from '../services/personas-asignadas/personas-asignadas.service';
import {RecursosAsociadosService} from '../services/recursos-asociados/recursos-asociados.service';
import {ProyectosRedService} from '../services/proyectos-red/proyectos-red.service';
import {PersonaAsignada} from '../services/personas-asignadas/persona-asignada.model';
import {DetalleRed} from '../services/detalle-red/detalle-red.model';
import {ProyectoRed} from '../services/proyectos-red/proyecto-red.model';
import {RecursoAsociado} from '../services/recursos-asociados/recurso-asociado.model';
import {Metadata} from '../services/metadata/metadata.model';
import {MetadataService} from '../services/metadata/metadata.service';
import {DetalleRedService} from '../services/detalle-red/detalle-red.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common'


@Component({
  selector: 'app-detalle-red',
  templateUrl: './detalle-red.component.html',
  styleUrls: ['./detalle-red.component.css']
})
export class DetalleREDComponent implements OnInit {
  detalle: DetalleRed;
  personas: PersonaAsignada[];
  recursos: RecursoAsociado[];
  proyectos: ProyectoRed[];
  metadata: Metadata[];
  idRed: number;

  constructor(private route: ActivatedRoute,
              private detalleRedService: DetalleRedService,
              private personaAsignadaService: PersonasAsignadasService,
              private recursosAsociadosService: RecursosAsociadosService,
              private proyectosRedService: ProyectosRedService,
              private metadataService: MetadataService,
              private location: Location) { }


  ngOnInit() {
    this.idRed = this.route.snapshot.params.idRed;
    this.getDetalleRed();
    this.getPersonasAsignadas();
    this.getRecursosAsociados();
    this.getProyectosRed();
    this.getMetadata();

  }

  getDetalleRed(): void {
    this.detalleRedService.getDetalleRed(this.idRed)
        .subscribe(detalle => this.detalle = detalle);
  }

  getPersonasAsignadas(): void {
    this.personaAsignadaService.getPersonasAsignadas(this.idRed)
      .subscribe(personas => this.personas = personas);
  }

  getRecursosAsociados(): void {
    this.recursosAsociadosService.getRecursosAsociados(this.idRed)
      .subscribe(recursos => this.recursos = recursos);
  }

  getProyectosRed(): void {
    this.proyectosRedService.getProyectosRed(this.idRed)
      .subscribe(proyectos => this.proyectos = proyectos);
  }

  getMetadata(): void {
    this.metadataService.getMetadata(this.idRed)
      .subscribe(metadata => this.metadata = metadata);
  }

  goBack(): void {
    this.location.back()
  }

}
