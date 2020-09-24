import { Injectable } from '@angular/core';

import { Psicologo } from './psicologo.model';

@Injectable({
  providedIn: 'root'
})
export class PsicologoService {

  constructor() { }

  listarPsis(): Psicologo[] {
    const psis = localStorage['psis'];
    return psis ? JSON.parse(psis) : [];
  }

  cadastarPsi(psicologo: Psicologo): void{
    const psicologos = this.listarPsis();
    psicologo.id = new Date().getTime();
    psicologos.push(psicologo);
    localStorage['psis'] = JSON.stringify(psicologos);

  }

  buscarPorId(id: number): Psicologo{
    const psis: Psicologo[] = this.listarPsis();
    return psis.find(x => x.id === id);
  } 
  
  atualizarPsi(psicologo: Psicologo): void {
    const psis: Psicologo[] = this.listarPsis();
    psis.forEach((obj, index, objs) => {
      if(psicologo.id === obj.id){
        objs[index] = psicologo;
      }
    });
    localStorage['psis'] = JSON.stringify(psis);
  }

  remover(id: number): void {
    let psicologos: Psicologo[] = this.listarPsis();
    psicologos = psicologos.filter(x => x.id !== id);
    localStorage['psis'] = JSON.stringify(psicologos);
  }

   alterarStatus(id: number): void{
     const psis: Psicologo[] = this.listarPsis();
     psis.forEach((obj, index, objs) => {
       if(id === obj.id){
         objs[index].status = !obj.status;
       }
     });
     localStorage['psis'] = JSON.stringify(psis);
   }
}
