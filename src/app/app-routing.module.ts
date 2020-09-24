import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PsicologoRoutes } from './psicologos/psicologos-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/psicologos/listar',
    pathMatch: 'full'
  },
  //permite concatenar arrays 
  ...PsicologoRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
