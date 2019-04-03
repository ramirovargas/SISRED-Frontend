import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RedsPorPersonaComponent } from './components/reds-por-persona/reds-por-persona.component';

const routes: Routes = [
  {path: '', component: RedsPorPersonaComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}