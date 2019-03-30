import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedsService } from 'src/app/services/reds/reds.service';

@Component({
  selector: 'app-reds-relacionados',
  templateUrl: './reds-relacionados.component.html',
  styleUrls: ['./reds-relacionados.component.css']
})
export class RedsRelacionadosComponent implements OnInit {

  @Input() proyectoConectate;

  private modal = null;

  public redsList = [];

  public redsListOptions = [];

  public loading = true;

  public selectedMultimedia = null;

  public nombreCortoProyecto = null;

  public nombreProyecto = null;

  public success = '#28a745';

  private idProyectoC = 0;

  constructor(
    private redsService: RedsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.idProyectoC = this.activatedRoute.snapshot.params['idProyectoC'];
    console.log(this.idProyectoC);
  }

  ngOnInit() {
    this.loadReds();
  }

  loadReds() {
    this.redsService
      .getRedsRelacionados(this.idProyectoC)
      .then((data: any) => {
        this.nombreCortoProyecto = data.nombreCortoProyecto;
        this.nombreProyecto = data.nombreProyecto;
        this.redsListOptions = data.redsRelacionados;
        this.redsListOptions.sort(this.compare);
        this.redsList = this.redsListOptions;
        this.loading = false;
        console.log(this.idProyectoC);
      })
      .catch(err => {
        alert(err);
      });
  }

  compare(a, b) {
    if (a.fechaCreacion < b.fechaCreacion) {
      return 1;
    }
    if (a.fechaCreacion > b.fechaCreacion) {
      return -1;
    }
    return 0;
  }
}
