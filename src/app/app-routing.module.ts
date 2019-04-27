import { NotFoundComponent } from './components/not-found/not-found.component';
import { RedsPorPersonaComponent } from './components/reds-por-persona/reds-por-persona.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRedComponent } from './components/add-red/add-red.component';
import { AgregarRecursoComponent } from './components/agregar-recurso/agregar-recurso.component';
import { DetalleRecursoComponent } from './components/detalle-recurso/detalle-recurso.component';
import { DetalleREDComponent } from './components/detalle-red/detalle-red.component';
import { ProyectosRedComponent } from './components/proyectos-red/proyectos-red.component';
import { RedRecursosDetalleComponent } from './components/red-recursos-detalle/red-recursos-detalle.component';
import { RedRecursosComponent } from './components/red-recursos/red-recursos.component';
import { RedAsignadosComponent } from './components/red/asignaciones/red-asignados.component';
import { RedsRelacionadosComponent } from './components/reds-relacionados/reds-relacionados.component';
import { VerAvanceRedComponent } from './components/ver-avance-red/ver-avance-red.component';
import { VersionRedRevisionComponent } from './components/version-red-revision/version-red-revision.component';
import { LoginComponent } from './components/login/login.component';
import { AutenticacionGuard } from './guards/autenticacion/autenticacion.guard';
import { NoAutenticadoGuard } from './guards/no-autenticado/no-autenticado.guard';
import { BuscarRecursoComponent } from './components/buscar-recurso/buscar-recurso.component';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [NoAutenticadoGuard] },
  {
    path: 'red/:idRed/proyecto/agregar',
    component: AddRedComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: 'red/:idRed/detalle',
    component: DetalleREDComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: 'reds/:idUsuario',
    component: RedAsignadosComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: 'asignaciones',
    component: RedsPorPersonaComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: 'red/:idRed/version/:version',
    component: VersionRedRevisionComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: 'red/:idRed/proyectos',
    component: ProyectosRedComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: 'red/:idRed/relacionados',
    component: RedsRelacionadosComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: 'red/:idRed/recursos',
    component: RedRecursosComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: 'red/:idRed/recursos/agregar',
    component: AgregarRecursoComponent,
    canActivate: [AutenticacionGuard]
  },
  // {
  //   path: 'red/:id/recursos/:idrecurso',
  //   component: RedRecursosDetalleComponent
  // },
  {
    path: 'red/:idRed/recursos/:id',
    component: DetalleRecursoComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: 'getRecurso/:id',
    component: DetalleRecursoComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: 'reds/:idRed/avance',
    component: VerAvanceRedComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: 'buscarRecurso',
    component: BuscarRecursoComponent,
    canActivate: [AutenticacionGuard]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
