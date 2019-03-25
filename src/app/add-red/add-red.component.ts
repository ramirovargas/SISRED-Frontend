import { Component, OnInit, Injectable } from '@angular/core';
import { AddRedService } from '../services/add-red/add-red.service';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-red',
  templateUrl: './add-red.component.html',
  styleUrls: ['./add-red.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class AddRedComponent implements OnInit {

  public addRedForm: FormGroup;

  constructor(private addRedService: AddRedService) { 
    
  }

  ngOnInit() {
    this.addRedForm = new FormGroup({
      name: new FormControl(),
      type: new FormControl(),
      folder: new FormControl(),
      redId: new FormControl()
   });
  }

  addRed(){
    var result =
      this.addRedService.addRed(
        this.addRedForm.get('name').value,
        this.addRedForm.get('type').value,
        this.addRedForm.get('folder').value,
        this.addRedForm.get('redId').value);
  }


}
