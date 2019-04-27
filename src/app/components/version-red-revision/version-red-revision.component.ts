import { Component, OnInit, Input } from '@angular/core';
import { RedVersionService } from 'src/app/services/red/red-version-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-version-red-revision',
  templateUrl: './version-red-revision.component.html',
  styleUrls: ['./version-red-revision.component.css']
})
export class VersionRedRevisionComponent implements OnInit {
  idRed: String;
  reds: any[];
  closeResult: string;
  @Input() name;
  constructor(private redVersionService: RedVersionService,private modalService: NgbModal) { }

  ngOnInit() {
    this.idRed="S0001";
  }
  habilitarRed(){
    this.redVersionService.setREDs(this.idRed)
      .subscribe(reds  => this.reds = reds);
  }
  
  open(){
    this.habilitarRed();
  }
}
