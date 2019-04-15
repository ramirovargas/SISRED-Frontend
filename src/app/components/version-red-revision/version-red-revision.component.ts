import { Component, OnInit } from '@angular/core';

declare function setup(): any;

@Component({
  selector: 'app-version-red-revision',
  templateUrl: './version-red-revision.component.html',
  styleUrls: ['./version-red-revision.component.css']
})

export class VersionRedRevisionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setup();
  }

}
