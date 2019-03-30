import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedsRelacionadosComponent } from './components/reds-relacionados/reds-relacionados.component';

const routes: Routes = [
  {
    path: 'redrel',
    component: RedsRelacionadosComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
