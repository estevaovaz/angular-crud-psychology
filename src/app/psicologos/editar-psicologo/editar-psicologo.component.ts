import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Psicologo } from '../shared/psicologo.model';
import { PsicologoService } from '../shared/psicologo.service';

@Component({
  selector: 'app-editar-psicologo',
  templateUrl: './editar-psicologo.component.html',
  styleUrls: ['./editar-psicologo.component.css']
})
export class EditarPsicologoComponent implements OnInit {

  @ViewChild('formPsicologo', { static: true }) formPsicologo: NgForm;
  psicologo: Psicologo;

  constructor(private psicologoService: PsicologoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.psicologo = this.psicologoService.buscarPorId(id);
  }

  atualizar(): void {
    if (this.formPsicologo.form.valid) {
      this.psicologoService.atualizarPsi(this.psicologo);
      this.router.navigate(["/psicologos"]);
    }
  }

}
