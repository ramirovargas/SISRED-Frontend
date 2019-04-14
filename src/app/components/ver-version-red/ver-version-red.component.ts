import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VerVersionRedService} from '../../services/version/ver-version-red/ver-version-red.service';
import {Version} from '../../services/version/version.model';
import {Recurso} from '../../services/version/ver-version-red/recurso.model';

@Component({
  selector: 'app-ver-version-red',
  templateUrl: './ver-version-red.component.html',
  styleUrls: ['./ver-version-red.component.css']
})
export class VerVersionRedComponent implements OnInit {

  objVersion: Version = null;
  objRecursosVersion: Array<Recurso> = null;
  idVersion: number;

  constructor(private route: ActivatedRoute, private verVersionRedService: VerVersionRedService) {
  }

  ngOnInit() {
     this.idVersion = this.route.snapshot.params.id;
     this.getVersion();
     this.getRecursosVersion();
  }

  getVersion(): void {
    this.verVersionRedService.getVersion(this.idVersion).subscribe(vVersion => this.objVersion = vVersion);
  }

  getRecursosVersion(): void {
    this.verVersionRedService.getRecursosVersion(this.idVersion).subscribe(vLstRecurso => this.objRecursosVersion = vLstRecurso);
  }
}
