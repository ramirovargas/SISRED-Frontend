import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RedsRelacionadosComponent } from './components/reds-relacionados/reds-relacionados.component';
import { RedRecursosComponent } from './components/red-recursos/red-recursos.component';
import { RedRecursosDetalleComponent } from './components/red-recursos-detalle/red-recursos-detalle.component';

const routes: Routes = [
  {
    path: 'redrel/:idProyectoC',
    component: RedsRelacionadosComponent
  },
  {
    path: 'red/:id/recursos',
    component: RedRecursosComponent
  },
  {
    path: 'red/:id/recursos/:idrecurso',
    component: RedRecursosDetalleComponent
  },
  {
    path: '**',
    redirectTo: 'redrel/1'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
