import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRedComponent } from './add-red/add-red.component';
import { RedAsignadosComponent } from './red/asignaciones/red-asignados.component';
import { HttpClientModule } from '@angular/common/http';
import {DetalleREDComponent} from './detalle-red/detalle-red.component';
import {ProyectosRedComponent} from './proyectos-red/proyectos-red.component';

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
