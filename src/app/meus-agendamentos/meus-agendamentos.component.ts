import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-meus-agendamentos',
  templateUrl: './meus-agendamentos.component.html',
  styleUrls: ['./meus-agendamentos.component.css']
})
export class MeusAgendamentosComponent {
  constructor(private router: Router) {}
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
