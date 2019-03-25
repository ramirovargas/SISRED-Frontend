import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRedComponent } from './add-red/add-red.component';
import { RedAsignadosComponent } from './red/asignaciones/red-asignados.component';
import { HttpClientModule } from '@angular/common/http'; 

const routes: Routes = [
  {path: 'agregar', component: AddRedComponent},
  {path: 'red/asignados', component: RedAsignadosComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
