import {  AfterViewInit, Component } from '@angular/core';
@Component({
  selector: 'app-editar-solicitacao',
  templateUrl: './editar-solicitacao.component.html',
  styleUrls: ['./editar-solicitacao.component.css']
})
export class EditarSolicitacaoComponent implements AfterViewInit{
  percentage = 12;
  ngAfterViewInit() {
    const myElement = document.getElementById("progress") as HTMLElement;
    myElement.style.width = `${this.percentage}%`;
  }  
}
