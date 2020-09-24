import { Routes } from '@angular/router';
import { CadastrarPsicologosComponent } from './cadastrar-psicologos/cadastrar-psicologos.component';
import { EditarPsicologoComponent } from './editar-psicologo/editar-psicologo.component';
import { ListarPsicologosComponent } from './listar-psicologos/listar-psicologos.component';

export const PsicologoRoutes: Routes = [
    {
        path: 'psicologos',
        redirectTo: 'psicologos/listar'
    },   
    {
        path: 'psicologos/listar',
        component: ListarPsicologosComponent
    },
    {
        path: 'psicologos/cadastrar',
        component: CadastrarPsicologosComponent
    },
    {
        path: 'psicologos/editar/:id',
        component: EditarPsicologoComponent
    }   
];
