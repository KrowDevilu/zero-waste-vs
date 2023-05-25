import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fazer-agendamento',
  templateUrl: './fazer-agendamento.component.html',
  styleUrls: ['./fazer-agendamento.component.css']
})
export class FazerAgendamentoComponent {
  constructor(private router: Router) {}
  goToPage(pageName:string){
   this.router.navigate([`${pageName}`]);
 }
  createComponent() {
    const produto = document.getElementById('prod');
    let cloneProduto = produto?.cloneNode(true);
    document.getElementById('produtos')?.appendChild(cloneProduto as Node);
  }
}
