import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RedsRelacionadosComponent } from './components/reds-relacionados/reds-relacionados.component';
import { RedsRecursosComponent } from './components/reds-recursos/reds-recursos.component';
import { RecursosComponent } from './components/recursos/recursos.component';

const routes: Routes = [
    {
        path: 'redrel',
        component: RedsRelacionadosComponent,
    },
        {
        path: 'red/:id/recursos',
        component: RedsRecursosComponent,
    },
        {
        path: 'red/:id/recursos/:idrecurso',
        component: RecursosComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule { }
