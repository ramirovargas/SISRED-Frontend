import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarRecursoComponent } from './AgregarRecurso/agregar-recurso.component';
import { DetalleRecursoComponent } from "./detalle-recurso/detalle-recurso.component";
import { VerAvanceRedComponent } from "./ver-avance-red/ver-avance-red.component";

const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{
        path: 'AgregarRecurso',
		component: AgregarRecursoComponent
    },
    {
        path: "detalle/recurso/:id",
        component: DetalleRecursoComponent
    },
    {
        path: "ver/avance-red/:id",
        component: VerAvanceRedComponent
    }
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
