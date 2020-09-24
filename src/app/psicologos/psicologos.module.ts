import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPsicologosComponent } from './listar-psicologos/listar-psicologos.component';
import { PsicologoService } from './shared/psicologo.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CadastrarPsicologosComponent } from './cadastrar-psicologos/cadastrar-psicologos.component';
import { EditarPsicologoComponent } from './editar-psicologo/editar-psicologo.component';


@NgModule({
  declarations: [
    ListarPsicologosComponent,
    CadastrarPsicologosComponent,
    EditarPsicologoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    PsicologoService
  ]
})
export class PsicologosModule { }
