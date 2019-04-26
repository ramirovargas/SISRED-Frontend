import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VerVersionRedService} from '../../services/version/ver-version-red/ver-version-red.service';
import {Version} from '../../services/version/version.model';
import {Recurso} from '../../services/version/ver-version-red/recurso.model';

declare function setup(): any;

@Component({
  selector: 'app-ver-version-red',
  templateUrl: './ver-version-red.component.html',
  styleUrls: ['./ver-version-red.component.css']
})
export class VerVersionRedComponent implements OnInit {

  objVersion: Version = null;
  objRecursosVersion: Array<Recurso> = null;
  idVersion: number;
  mensajeLink: string = 'Cargando link de descarga...';
  

  constructor(private route: ActivatedRoute,
     private verVersionRedService: VerVersionRedService
          ) {}

  ngOnInit() {
    setup();
    this.idVersion = this.route.snapshot.params.id;
    this.getVersion();
    this.getRecursosVersion();     
  }

  getVersion(): void {
    this.verVersionRedService.getVersion(this.idVersion)
    .then(vVersion =>{
      this.objVersion = vVersion;
      console.log('prueba 2');
      console.log(vVersion);
      this.getImagenesVersiones();
      this.initDescargarZip();

    })
    .catch(err => {
      console.log(err);
    });
  }

  getRecursosVersion(): void {
    this.verVersionRedService.getRecursosVersion(this.idVersion).subscribe(vLstRecurso => this.objRecursosVersion = vLstRecurso);
  }

   // Metodo que obtiene las versiones del RED

   
  getImagenesVersiones(): void {
    if (this.objVersion){
      console.log('prueba');
      console.log(this.objVersion);
      this.verVersionRedService.getImagenVersion(this.objVersion.imagen)
        .then(response => {
          this.objVersion.url = response.link;
        })
        .catch(err => {
          console.log(err);
        });
    }
    
  }

  initDescargarZip(): void {
    this.verVersionRedService.descargarZip(this.objVersion.archivos)
      .then(response => {
        let urlDescarga = URL.createObjectURL(response.fileBlob);
        let linkDescarga = document.getElementById('linkDescarga');
        linkDescarga.setAttribute('href', urlDescarga);
        linkDescarga.setAttribute('download', `version${this.objVersion.numero}.zip`)
        linkDescarga.setAttribute('class', 'button');
        this.mensajeLink = 'Descargar archivos de la versión';
        console.log('yesss');
      })
      .catch(err => {
        console.log('noooo');
        console.log(err);
      });
  }




}
