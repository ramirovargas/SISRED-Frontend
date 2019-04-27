import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare function setup():any;

@Component({
  selector: 'app-comentar-imagen',
  templateUrl: './comentar-imagen.component.html',
  styleUrls: ['./comentar-imagen.component.css']
})
export class ComentarImagenComponent implements OnInit {

  public Editor = ClassicEditor;

  startX: number = null;
  startY: number = null;

  x1: number = null;
  y1: number = null;
  x2: number = null;
  y2: number = null;

  drag:boolean = false;
  mostrarCaja: boolean;

  @ViewChild("myCanvas") myCanvas:ElementRef;

  mdEvent(e) {
    //persist starting position
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.drag = true;
  }

  mmEvent(e) {

    if (this.drag) {

      //redraw image on canvas
      let base_image = new Image();
      base_image.src = 'https://ak3.picdn.net/shutterstock/videos/10826363/thumb/1.jpg';
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
        context.strokeStyle = 'rgba(255,0,0,100)';
        context.fillStyle = 'rgba(255,180,180,0.7)';
        context.strokeRect(x, y, w, h);
        context.fillRect(x, y, w, h);
      };


    }
  }

  muEvent(e) {
    //draw final rectangle on canvas
    let x = this.x1 = this.startX - this.myCanvas.nativeElement.getBoundingClientRect().left;
    let y = this.y1 = this.startY - this.myCanvas.nativeElement.getBoundingClientRect().top;
    let w = this.x2 = e.clientX - this.myCanvas.nativeElement.getBoundingClientRect().left - x;
    let h = this.y2 = e.clientY - this.myCanvas.nativeElement.getBoundingClientRect().top - y;
    this.myCanvas.nativeElement.getContext("2d").setLineDash([0]);
    this.myCanvas.nativeElement.getContext("2d").strokeRect(x, y, w, h);

    let ctx = CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext("2d");

    this.mostrarCaja = true;
    this.drag = false;
  }

  ngOnInit() {
    
    setup();
    //draw image on canvas
    let base_image = new Image();
    let context: CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext("2d");
    base_image.onload = function () {
      context.canvas.height = base_image.height;
      context.canvas.width = base_image.width;
      context.drawImage(base_image, 0, 0);
    };
    base_image.src = 'https://ak3.picdn.net/shutterstock/videos/10826363/thumb/1.jpg';
  }

  onChangeComentario(comentario){
    console.log(comentario.editor.getData());
    console.log("X1:" + this.x1);
    console.log("Y1:" + this.y1);
    console.log("X2:" + this.x2);
    console.log("Y2:" + this.y2);
  }

}
