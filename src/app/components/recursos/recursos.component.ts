import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecursoService } from 'src/app/services/recurso/recurso.service';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})

export class RecursosComponent {

recursos: [] = [];
idrecurso: number = 0;
idred: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private api: RecursoService) {
    this.idrecurso = this.activatedRoute.snapshot.params['idrecurso'];
    this.getResources();
    this.idred = this.activatedRoute.snapshot.params['id'];
  }
    getResources = () => {
      this.api.getRecursos(this.idrecurso).subscribe(
       data => {
          this.recursos = data;
          console.log(this.idrecurso);
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    }
}




