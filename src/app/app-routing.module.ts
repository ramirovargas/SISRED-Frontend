import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRedComponent } from './components/add-red/add-red.component';
import { RedAsignadosComponent } from './components/red/asignaciones/red-asignados.component';
import { HttpClientModule } from '@angular/common/http';
import {DetalleREDComponent} from './components/detalle-red/detalle-red.component';
import {ProyectosRedComponent} from './components/proyectos-red/proyectos-red.component';

const routes: Routes = [
  {path: '', component: RedAsignadosComponent},
  {path: 'red/:idRed/proyecto/agregar', component: AddRedComponent},
  {path: 'red/asignados/:idUsuario', component: RedAsignadosComponent},
  {path: 'red/:idRed/detalle', component: DetalleREDComponent},
  {path: 'red/:idRed/proyectos', component: ProyectosRedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
