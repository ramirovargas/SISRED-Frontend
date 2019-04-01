import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RED } from './Models/red';
import { ActivatedRoute } from '@angular/router';
import { AdvanceRedRestClientService } from '../services/advance-red-rest-client.service';

@Component({
  selector: 'app-ver-avance-red',
  templateUrl: './ver-avance-red.component.html',
  styleUrls: ['./ver-avance-red.component.css']
})
export class VerAvanceRedComponent implements OnInit {

  public red: RED;
  subred: RED;
  public advanceRedForm: FormGroup;

  constructor(
    
    private route: ActivatedRoute,
    private advanceRedRestClientService: AdvanceRedRestClientService) {
      this.route.params.subscribe();
   }

  ngOnInit(): void {
    this.loadForm();
    this.getAdvanceRed();
  }

  loadForm(): void {
    this.advanceRedForm = new FormGroup({
      nombre: new FormControl(""),
      getProyecto: new FormControl(""),
      getFase: new FormControl(""),
    });
  }

  public getAdvanceRed(): void {
    this.advanceRedRestClientService
      .getAdvanceRed()
      .subscribe(response => {
        this.red = response[0];
        this.subred = response;
      });
  }

}
