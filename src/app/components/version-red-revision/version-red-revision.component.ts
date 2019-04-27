import { Component, OnInit, Input } from '@angular/core';
import { RedVersionService } from 'src/app/services/red/red-version-service';
import { NgbActiveModal,NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name: any;

  constructor(public activeModal: NgbActiveModal) {}
}


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
    this.getHabilitarRed();
  }
  getHabilitarRed(): void {
    this.redVersionService.getREDs(this.idRed)
      .subscribe(reds => this.reds = reds);
  }  
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
}
