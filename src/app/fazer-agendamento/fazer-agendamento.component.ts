import { Component } from '@angular/core';

@Component({
  selector: 'app-fazer-agendamento',
  templateUrl: './fazer-agendamento.component.html',
  styleUrls: ['./fazer-agendamento.component.css']
})
export class FazerAgendamentoComponent {
  createComponent() {
    const produto = document.getElementById('prod');
    let cloneProduto = produto?.cloneNode(true);
    document.getElementById('produtos')?.appendChild(cloneProduto as Node);
  }
}
