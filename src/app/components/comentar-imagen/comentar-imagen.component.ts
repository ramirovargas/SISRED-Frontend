import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recurso } from '../../services/version/ver-version-red/recurso.model';
import { Comentario } from '../../services/comentario/comentario.model';
import { ComentarImagenService } from '../../services/comentario/comentar-imagen.service';

declare function setup():any;

@Component({
  selector: 'app-comentar-imagen',
  templateUrl: './comentar-imagen.component.html',
  styleUrls: ['./comentar-imagen.component.css']
})
export class ComentarImagenComponent implements OnInit {

  public Editor = ClassicEditor;

  usuarioId: number = 5;

  startX: number;
  startY: number;

  x1: number;
  y1: number;
  x2: number;
  y2: number;

  drag:boolean = false;
  mostrarCaja: boolean;

  idVersion: number;
  idRecurso: number;
  recurso: Recurso;
  comentarios: Comentario[] = [];
  comentario: string = '';

  @ViewChild("myCanvas") myCanvas:ElementRef;

  constructor(private route: ActivatedRoute, private comentarImagenService: ComentarImagenService) { }

  mdEvent(e) {
    //persist starting position
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.drag = true;
  }

  mmEvent(e) {

    if (this.drag && this.recurso) {

      //redraw image on canvas
      let base_image = new Image();
      base_image.src = this.recurso.url;
      let context: CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext("2d");
      let sx = this.startX;
      let sy = this.startY;

      let canvasTop = this.myCanvas.nativeElement.getBoundingClientRect().top;
      let canvasLeft = this.myCanvas.nativeElement.getBoundingClientRect().left;

      base_image.onload = function () {
        context.canvas.height = base_image.height;
        context.canvas.width = base_image.width;
        context.drawImage(base_image, 0, 0);

        //draw rectangle on canvas
        let x = sx - canvasLeft;
        let y = sy - canvasTop;
        let w = e.clientX - canvasLeft - x;
        let h = e.clientY - canvasTop - y;
        context.setLineDash([6]);
        context.strokeRect(x, y, w, h);
      };


    }
  }

  muEvent(e) {
    //draw final rectangle on canvas
    let x = this.x1 = this.startX - this.myCanvas.nativeElement.getBoundingClientRect().left;
    let y = this.y1 = this.startY - this.myCanvas.nativeElement.getBoundingClientRect().top;
    let w = this.x2 = e.clientX - this.myCanvas.nativeElement.getBoundingClientRect().left - x;
    let h = this.y2 = e.clientY - this.myCanvas.nativeElement.getBoundingClientRect().top - y;
    this.myCanvas.nativeElement.getContext("2d").setLineDash([6]);
    this.myCanvas.nativeElement.getContext("2d").strokeRect(x, y, w, h);

    let ctx = CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext("2d");

    this.mostrarCaja = true;
    this.drag = false;
  }

  ngOnInit() {
    setup();
    this.idVersion = this.route.snapshot.params.idVersion;
    this.idRecurso = this.route.snapshot.params.idRecurso;
    this.getRecurso();
    this.getComentarios();
  }

  initCanvas() {
    let base_image = new Image();
    let context: CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext("2d");
    base_image.onload = function () {
      context.canvas.height = base_image.height;
      context.canvas.width = base_image.width;
      context.drawImage(base_image, 0, 0);
    };
    base_image.src = this.recurso.url;
  }

  onChangeComentario(comentario){
    this.comentario = comentario.editor.getData();
  }

  getRecurso() {
    this.comentarImagenService.obtenerDetallesRecurso(this.idRecurso)
      .then(response => {
        this.recurso = response;
        this.getImagenRecurso();
      })
      .catch(err => {
        console.log(err);
      });
  }

  getImagenRecurso() {
    this.comentarImagenService.getImagenRecurso(this.recurso.archivo)
      .then(response => {
        this.recurso.url = response.link;
        this.initCanvas();
      })
      .catch(err => {
        console.log(err);
      });
  }

  getComentarios() {
    this.comentarImagenService.obtenerListaComentarios(this.idVersion, this.idRecurso)
      .then(response => {
        this.comentarios = response;
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  publicarComentarioAreaNueva() {
    this.comentarImagenService.guardarComentarioNuevo(this.comentario, this.usuarioId, this.x1, 
      this.x2, this.y1, this.y2, this.idVersion, this.idRecurso)
      .subscribe(data => {
        console.log(data);
        window.location.reload();
      }, err => {
        console.log(err);
        alert(err);
      });
  }
}
