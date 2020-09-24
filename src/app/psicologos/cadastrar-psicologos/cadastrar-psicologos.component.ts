import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Psicologo } from '../shared/psicologo.model';
import { PsicologoService } from '../shared/psicologo.service';

@Component({
  selector: 'app-cadastrar-psicologos',
  templateUrl: './cadastrar-psicologos.component.html',
  styleUrls: ['./cadastrar-psicologos.component.css']
})
export class CadastrarPsicologosComponent implements OnInit {

  @ViewChild('formPsicologo') formPsicologo: NgForm;
  psicologo: Psicologo;

  constructor(private psicologoService:PsicologoService, private router:Router) { }

  ngOnInit(): void {
    this.psicologo = new Psicologo();
  }

  cadastrar(): void{
    if(this.formPsicologo.form.valid){
      this.psicologoService.cadastarPsi(this.psicologo);
      this.router.navigate(["/psicologos"]);
    }
  }
}
