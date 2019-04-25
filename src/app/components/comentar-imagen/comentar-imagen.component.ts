import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare function setup():any;

@Component({
  selector: 'app-comentar-imagen',
  templateUrl: './comentar-imagen.component.html',
  styleUrls: ['./comentar-imagen.component.css']
})
export class ComentarImagenComponent implements OnInit {

  startX: number = null;
  startY: number = null;
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
        context.setLineDash([6]);
        context.strokeRect(x, y, w, h);
      };


    }
  }

  muEvent(e) {
    //draw final rectangle on canvas
    let x = this.startX - this.myCanvas.nativeElement.getBoundingClientRect().left;
    let y = this.startY - this.myCanvas.nativeElement.getBoundingClientRect().top;
    let w = e.clientX - this.myCanvas.nativeElement.getBoundingClientRect().left - x;
    let h = e.clientY - this.myCanvas.nativeElement.getBoundingClientRect().top - y;
    this.myCanvas.nativeElement.getContext("2d").setLineDash([6]);
    this.myCanvas.nativeElement.getContext("2d").strokeRect(x, y, w, h);

    let ctx = CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("X,Y position:" + x.toString() + "," + y.toString(), 300, 150);
    ctx.fillText("Z,W position:" + (x+w).toString() + "," + (y+h).toString(), 300, 200);

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
      context.setLineDash([6]);
      context.strokeRect(450, 100, 300, 300);
      context.setLineDash([2]);
      context.strokeRect(691, 231, (744-691), (293-231));
    };
    base_image.src = 'https://ak3.picdn.net/shutterstock/videos/10826363/thumb/1.jpg';
  }

}
