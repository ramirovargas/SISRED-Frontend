import { Component, OnInit } from '@angular/core';
import { RedVersionService } from 'src/app/services/red/red-version-service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-version-red-revision',
  templateUrl: './version-red-revision.component.html',
  styleUrls: ['./version-red-revision.component.css']
})
export class VersionRedRevisionComponent implements OnInit {
  idRed: String;
  reds: any[];
  closeResult: string;
  constructor(private redVersionService: RedVersionService,private modalService: NgbModal) { }

  ngOnInit() {
    this.idRed="S0001";
    this.getHabilitarRed();
  }
  getHabilitarRed(): void {
    this.redVersionService.getREDs(this.idRed)
      .subscribe(reds => this.reds = reds);
  }  
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', windowClass: 'custom-class' })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
