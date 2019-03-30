import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedsService } from 'src/app/services/reds/reds.service';

@Component({
  selector: 'app-reds-recursos',
  templateUrl: './reds-recursos.component.html',
  styleUrls: ['./reds-recursos.component.css']
})
export class RedsRecursosComponent implements OnInit {

reds: [] = [];
id: number = 0;

constructor(private activatedRoute: ActivatedRoute, private api: RedsService) {
  this.getReds();
  this.id = this.activatedRoute.snapshot.params['id']
  }

  getReds = () => {
    this.api.getRedDetail(this.id).subscribe(
     data => {
        this.reds = data;
        console.log(this.id);
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
  }

}
