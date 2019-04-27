import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RevisionesService } from '../../../services/revision/revision.service';
import { Revision } from "../../../services/revision/revision.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  revisiones : Array<Revision> = [];
  idUsuario: String;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private revisionesService: RevisionesService
  ) { }

  ngOnInit() {    
    this.getRevisiones()
  }

  getRevisiones(){
    this.revisionesService.getRevisiones().subscribe(revisiones => this.revisiones = revisiones);
  }

  ultimo(rev: Revision){
    if(rev == this.revisiones[this.revisiones.length]) return true
    return false
  }
}
