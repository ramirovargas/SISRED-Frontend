import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddRedComponent } from "./components/add-red/add-red.component";
import { RedAsignadosComponent } from "./components/red/asignaciones/red-asignados.component";
import { HttpClientModule } from "@angular/common/http";
import { DetalleREDComponent } from "./components/detalle-red/detalle-red.component";
import { ProyectosRedComponent } from "./components/proyectos-red/proyectos-red.component";
import { CommonModule } from "@angular/common";
import { RedsRelacionadosComponent } from "./components/reds-relacionados/reds-relacionados.component";
import { RedRecursosComponent } from "./components/red-recursos/red-recursos.component";
import { RedRecursosDetalleComponent } from "./components/red-recursos-detalle/red-recursos-detalle.component";
import { AgregarRecursoComponent } from "./AgregarRecurso/agregar-recurso.component";
import { DetalleRecursoComponent } from "./detalle-recurso/detalle-recurso.component";
import { VerAvanceRedComponent } from "./ver-avance-red/ver-avance-red.component";

const routes: Routes = [
  { path: "", component: RedAsignadosComponent },
  { path: "red/:idRed/proyecto/agregar", component: AddRedComponent },
  { path: "red/asignados/:idUsuario", component: RedAsignadosComponent },
  { path: "red/:idRed/detalle", component: DetalleREDComponent },
  { path: "red/:idRed/proyectos", component: ProyectosRedComponent },
  {
    path: "redrel/:idProyectoC",
    component: RedsRelacionadosComponent
  },
  {
    path: "red/:id/recursos",
    component: RedRecursosComponent
  },
  {
    path: "red/:id/recursos/:idrecurso",
    component: RedRecursosDetalleComponent
  },
  {
    path: "AgregarRecurso",
    component: AgregarRecursoComponent
  },
  {
    path: "detalle/recurso/:id",
    component: DetalleRecursoComponent
  },
  {
    path: "ver/avance-red/:id",
    component: VerAvanceRedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
