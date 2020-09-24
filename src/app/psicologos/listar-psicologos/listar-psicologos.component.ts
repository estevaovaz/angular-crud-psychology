import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Psicologo } from '../shared/psicologo.model';
import { PsicologoService } from '../shared/psicologo.service';

@Component({
  selector: 'app-listar-psicologos',
  templateUrl: './listar-psicologos.component.html',
  styleUrls: ['./listar-psicologos.component.css']
})

export class ListarPsicologosComponent implements OnInit {

  psicologos: Psicologo[];

  constructor(private psicologoService: PsicologoService) { }

  //chamado apos criacao do const
  ngOnInit(): void {
    this.psicologos = this.listarPsis();
  }

  listarPsis(): Psicologo[] {
    return this.psicologoService.listarPsis();
  }

  remover($event: any, psicologo: Psicologo): void {
    $event.preventDefault();
    if (confirm('Deseja excluir o psicólogo "' + psicologo.nome + '"?')) {
      this.psicologoService.remover(psicologo.id);
      this.psicologos = this.listarPsis();
    }
  }
}
