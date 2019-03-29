import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleRecursoComponent } from './detalle-recurso/detalle-recurso.component';

const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{
		path: 'detalle/recurso/:id',
		component: DetalleRecursoComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }