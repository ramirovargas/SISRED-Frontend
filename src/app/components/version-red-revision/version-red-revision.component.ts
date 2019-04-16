import { Component, OnInit } from '@angular/core';
import { Recurso } from 'src/app/services/version/recurso.model';
import { VersionRedRevisionService } from 'src/app/services/version/version-red-revision.service';
import { Version } from 'src/app/services/version/version.model';
import { version } from 'punycode';

declare function setup(): any;

@Component({
  selector: 'app-version-red-revision',
  templateUrl: './version-red-revision.component.html',
  styleUrls: ['./version-red-revision.component.css']
})

export class VersionRedRevisionComponent implements OnInit {
  private idVersion: number;
  
  constructor(
    private version: Version,
    private versionService: VersionRedRevisionService
  ) { }

  ngOnInit() {
    setup();
    this.getVersion();
  }

  getVersion() {
    this.versionService.getVersionInfo(this.idVersion).subscribe(version => (this.version = version));
  }
}
