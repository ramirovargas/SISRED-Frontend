import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VerVersionRedService} from '../../services/version/ver-version-red/ver-version-red.service';
import {Version} from '../../services/version/version.model';
import {Recurso} from '../../services/version/ver-version-red/recurso.model';
import { Dropbox } from 'dropbox';
declare function setup(): any;

@Component({
  selector: 'app-ver-version-red',
  templateUrl: './ver-version-red.component.html',
  styleUrls: ['./ver-version-red.component.css']
})
export class VerVersionRedComponent implements OnInit {

  constructor(private route: ActivatedRoute, private verVersionRedService: VerVersionRedService) {}

  objVersion: Version = null;
  objRecursosVersion: Array<Recurso> = null;
  idVersion: number;
  lstUrl: Array<Url> = new Array<Url>();
  mensajeLink = 'Cargando link de descarga...';

  ngOnInit() {
    setup();
    this.idVersion = this.route.snapshot.params.id;
    this.getVersion();
    this.getRecursosVersion();
     // this.getImagenesVersiones('/REDs/1/Versiones/459938-dragon-ball-z-goku-ss3.jpg');
  }

  getVersion(): void {
    this.verVersionRedService.getVersion(this.idVersion)
    .then(vVersion => {
      this.objVersion = vVersion;
      // this.getArchivo(this.objVersion.imagen, 'MINIATURA');
      console.log('prueba 2');
      console.log(vVersion);
      this.initDescargarZip();
    })
    .catch(err => {
      console.log(err);
    });
  }

  getRecursosVersion(): void {
    this.verVersionRedService.getRecursosVersion(this.idVersion).subscribe(vLstRecurso => this.objRecursosVersion = vLstRecurso);
  }

  getArchivo(ruta: string, nombre: string): void {
    const ACCESS_TOKEN = 'FOsYIGqxyoAAAAAAAAAAMg1bkfJ0WKhDIy4fQtWjI0hl9U6Q5jI-Y8qy-hv5KiiH';
    const dbx = new Dropbox({ accessToken: ACCESS_TOKEN });

    dbx.filesGetTemporaryLink({path: ruta})
       .then(vResponse => {
         // vResponse.link
       })
       .catch(vError => {
         alert(vError);
       });
  }

  initDescargarZip(): void {
    this.verVersionRedService.descargarZip(this.objVersion.archivos)
      .then(response => {
        const urlDescarga = URL.createObjectURL(response.fileBlob);
        const linkDescarga = document.getElementById('linkDescarga');
        linkDescarga.setAttribute('href', urlDescarga);
        linkDescarga.setAttribute('download', `version${this.objVersion.numero}.zip`);
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

export class Url {
  name: string;
  url: string;
}
