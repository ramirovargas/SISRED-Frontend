import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalleRed } from '../../services/red/detalle-red/detalle-red.model';
import { DetalleRedService } from '../../services/red/detalle-red/detalle-red.service';
import { CrearVersionModel, Version } from '../../services/version/version.model';
import { VersionService } from '../../services/version/version.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-red-crear-version',
  templateUrl: './red-crear-version.component.html',
  styleUrls: ['./red-crear-version.component.css']
})
export class RedCrearVersionComponent implements OnInit {
  detalle: DetalleRed;
  versionesExistentes: Version[];
  model: CrearVersionModel;
  filesToUpload: Array<File> = [];
  idRed: number;
  constructor(private route: ActivatedRoute, private detalleRedService: DetalleRedService,
              private versionesService: VersionService, private location: Location) { }

  ngOnInit() {
    this.idRed = this.route.snapshot.params.idRed;
    this.getDetalleRed();
    this.getVersiones();
  }

  // Metodo que procesa los archivos seleccionados para guardar versión
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = fileInput.target.files as Array<File>;
  }

  // Metodo ejecutado al darle enviar desde la vista
  onSubmit(form: NgForm) {
    this.model.descripcion = form.value.descripcion;
    this.model.archivos = [];
    for (const file of this.filesToUpload) {
      const path = (file as any).webkitRelativePath;
      this.model.archivos.push(path.substring(path.indexOf('/')));
    }
    this.uploadFiles(this.model.consecutivo);
    this.crearVersionRed(this.model);
  }

  // Método para crear versión de red. Envía información al backend.
  crearVersionRed(model: CrearVersionModel) {
    this.versionesService.crearVersionRed(model, this.idRed)
      .subscribe(status => {
        if (status) {
          this.goBack();
        }
      });
  }

  // Método que sube los archivos a dropbox
  uploadFiles(consecutivo: number) {
    this.versionesService.uploadFiles(this.idRed, consecutivo, this.filesToUpload);
  }

  // Metodo que obtiene informacion del RED
  getDetalleRed(): void {
    this.detalleRedService
      .getDetalleRed(this.idRed)
      .subscribe(detalle => (this.detalle = detalle));
  }

  // Metodo que obtiene las versiones del RED
  getVersiones(): void {
    this.versionesService.getVersiones(this.idRed)
      .then(versiones => {
        this.versionesExistentes = versiones;
        this.populateModel();
      });
  }
  // Metodo que llena la información necesaria para el modelo de la vista
  populateModel(): void {
    this.model = new CrearVersionModel();
    this.model.consecutivo = this.versionesExistentes.length + 1;
    this.model.nombre =  this.detalle.nameRed + ' ' + this.model.consecutivo;
    this.model.fechaCreacion = new Date().toLocaleString();
    this.model.creado_por = 'se-mende';
  }

  // Metodo que regresa a la pantella anterior
  goBack(): void {
    this.location.back();
  }

}
