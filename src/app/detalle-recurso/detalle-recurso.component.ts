import { Component, OnInit } from "@angular/core";
import { ResourceDetailModel } from "./detalle-recurso.component.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ResourceDetailsRestClientService } from "../services/resource-details-rest-client.service";
import { UrlConstant } from "../constants/url-constant";

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

  urlConstant: UrlConstant;
  detailResourceForm: FormGroup;

  showInputText = false;

  resourceDetailsoModel: ResourceDetailModel;

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
      .getResourceDetailsById(id)
      .subscribe(response => {
        this.resourceDetailsoModel = {
          type: response.tipo,
          author: response.autor,
          updateDate: response.fecha_ultima_modificacion,
          responsable: response.usuario_ultima_modificacion,
          description: response.descripcion,
          metadata: response.metadata
        };
      });
  }

  public update() {
    this.showInputText = false;
    this.resourceDetailsRestClientService
      .updateResourceDetail({})
      .subscribe(response => {
        console.log("cfsm");
        console.log(response);
        console.log("cfsm");
      });
  }
}
