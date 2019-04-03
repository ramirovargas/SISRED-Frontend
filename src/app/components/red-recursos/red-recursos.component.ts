import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedsService } from 'src/app/services/reds/reds.service';

@Component({
  selector: 'app-red-recursos',
  templateUrl: './red-recursos.component.html',
  styleUrls: ['./red-recursos.component.css']
})
export class RedRecursosComponent implements OnInit {

  reds: [] = [];
  id: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private api: RedsService) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getReds();
    }

    ngOnInit() {}

    getReds = () => {
      this.api.getRedDetail(this.id).subscribe(
       data => {
          this.reds = data;
          console.log(this.id);
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    }
}
