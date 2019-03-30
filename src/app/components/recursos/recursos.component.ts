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
id: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private api: RecursoService) {
    this.getResources();
    this.id = this.activatedRoute.snapshot.params['id']
  }
    getResources = () => {
      this.api.getRecursos(this.id).subscribe(
       data => {
          this.recursos = data;
          console.log(this.id);
        },
        error => {
          console.log(error);
        }
      )
    }
}




