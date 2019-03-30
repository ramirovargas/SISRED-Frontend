import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarRecursoComponent } from './AgregarRecurso/agregar-recurso.component';

const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{
        path: 'AgregarRecurso',
		component: AgregarRecursoComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
