import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRedComponent } from './add-red/add-red.component';
import { HttpClientModule } from '@angular/common/http'; 

const routes: Routes = [
  {path: 'agregar', component: AddRedComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
