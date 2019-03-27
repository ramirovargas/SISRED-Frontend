import { Component, OnInit } from "@angular/core";
import { ResourceDetailModel } from "./detalle-recurso.component.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ResourceDetailsRestClientService } from "../services/resource-details-rest-client.service";

@Component({
  selector: "app-detalle-recurso",
  templateUrl: "./detalle-recurso.component.html",
  styleUrls: ["./detalle-recurso.component.css"]
})
export class DetalleRecursoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private resourceDetailsRestClientService: ResourceDetailsRestClientService
  ) {
    this.route.params.subscribe(param => {
      this.getResourceDetail(Number(param["id"]));
    });
  }

  detailResourceForm: FormGroup;

  showInputText = false;

  resourceDetailsoModel: ResourceDetailModel = {
    type: "png",
    author: "Cristian Sepulveda",
    updateDate: new Date(),
    responsable: "Adriana",
    description:
      "Esto es un mock de ejemplo donde puede tener una descripcion muy larga de detalle del recurso",
    metadata: ["Universidad", "Videos", "Util"]
  };

  ngOnInit() {
    this.loadForm();
  }

  public edit() {
    this.showInputText = true;
  }

  loadForm() {
    this.detailResourceForm = new FormGroup({
      type: new FormControl("", Validators.required),
      author: new FormControl("", Validators.required),
      updateDate: new FormControl("", Validators.required),
      responsable: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      metadata: new FormControl("", Validators.required)
    });
  }

  public getResourceDetail(id: number): void {
    this.resourceDetailsRestClientService
      .getAllAudiosGallery()
      .subscribe(response => {
        console.log(response);
      });
  }

  public update() {
    this.showInputText = false;
    this.resourceDetailsRestClientService
      .updateResourceDetails({})
      .subscribe(response => {
        console.log("cfsm");
        console.log(response);
        console.log("cfsm");
      });
  }
}
