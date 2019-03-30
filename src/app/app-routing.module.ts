import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetalleRecursoComponent } from "./detalle-recurso/detalle-recurso.component";
import { VerAvanceRedComponent } from "./ver-avance-red/ver-avance-red.component";

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  {
    path: "detalle/recurso/:id",
    component: DetalleRecursoComponent
  },
  {
    path: "ver/avance-red",
    component: VerAvanceRedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
