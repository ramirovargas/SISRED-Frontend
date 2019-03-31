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

  public detailResourceForm: FormGroup;
  public resourceDetailsoModel: ResourceDetailModel;
  public showInputText = false;
  private idResource: number;

  constructor(
    private route: ActivatedRoute,
    private resourceDetailsRestClientService: ResourceDetailsRestClientService
  ) {
    this.route.params.subscribe(param => {
      this.getResourceDetail(Number(param["id"]));
      this.idResource = Number(param["id"]);
    });
  }

  ngOnInit(): void {
    this.loadForm();
  }

  public edit(): void {
    this.showInputText = true;
  }

  public cancelEdit(): void {
    this.showInputText = false;
  }

  loadForm(): void {
    this.detailResourceForm = new FormGroup({
      type: new FormControl(""),
      name: new FormControl("", Validators.required),
      author: new FormControl(""),
      updateDate: new FormControl(""),
      description: new FormControl(""),
      metadata: new FormControl(""),
    });
  }

  public getResourceDetail(id: number): void {
    this.resourceDetailsRestClientService
      .getResourceDetailsById(id)
      .subscribe(response => {
        this.resourceDetailsoModel = {
          type: response.tipo,
          author: response.getAutor,
          lastUserModification: response.getResponsableModificacion,
          updateDate: response.fecha_ultima_modificacion,
          creationDate: response.fecha_creacion,
          responsable: response.usuario_ultima_modificacion,
          description: response.descripcion,
          metadata: response.metadata,
          name: response.nombre,
          thumbnail: response.thumbnail
        };
      });
  }

  public update(): void {
    this.showInputText = false;
    if (this.detailResourceForm.valid) {
      const json = {
        name: this.detailResourceForm.controls.name.value,
        description: this.detailResourceForm.controls.description.value,
        lastUserModification: 'Crisian Sepulveda XD'
      }
      console.log(json);
      this.resourceDetailsRestClientService.updateResourceDetail(json).subscribe(response => {
        this.getResourceDetail(this.idResource);
      });

    }

  }
}
