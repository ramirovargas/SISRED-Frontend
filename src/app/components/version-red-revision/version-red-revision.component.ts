import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Recurso } from 'src/app/services/version/recurso.model';
import { VersionRedRevisionService } from 'src/app/services/version/version-red-revision.service';
import { Version } from 'src/app/services/version/version.model';
import { ActivatedRoute } from '@angular/router';

declare function setup(): any;
declare function setupTable(): any;

@Component({
  selector: 'app-version-red-revision',
  templateUrl: './version-red-revision.component.html',
  styleUrls: ['./version-red-revision.component.css']
})

export class VersionRedRevisionComponent implements OnInit  {
  private idVersion: number;
  private version: Version;
  private recursos: Array<Recurso> = [];
  
  constructor(
    private route: ActivatedRoute,    
    private versionService: VersionRedRevisionService
  ) { }

  ngOnInit() {
    setup();
    this.idVersion = this.route.snapshot.params.version;
    this.getVersion();
    this.getRecursos();
  }

  getVersion(): void {
    this.versionService.getVersionInfo(this.idVersion).subscribe(version => (this.version = version));
    setup();
  }

  getRecursos(): void {    
    this.versionService.getRecursos(this.idVersion).subscribe(recursos => (this.recursos = recursos), error=>console.log("error: "+error))
    setTimeout(function() { setupTable() }, 2000); //TODO: Use antoher solution instead of a delay
  }
}
