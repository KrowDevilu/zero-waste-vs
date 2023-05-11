import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-minhas-solicitacoes',
  templateUrl: './minhas-solicitacoes.component.html',
  styleUrls: ['./minhas-solicitacoes.component.css']
})
export class MinhasSolicitacoesComponent {
  constructor(private router: Router) {}
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
