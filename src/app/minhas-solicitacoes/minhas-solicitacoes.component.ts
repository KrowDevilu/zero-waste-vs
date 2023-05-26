import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-minhas-solicitacoes',
  templateUrl: './minhas-solicitacoes.component.html',
  styleUrls: ['./minhas-solicitacoes.component.css']
})
export class MinhasSolicitacoesComponent implements AfterViewInit{
  constructor(private router: Router) {}
  percentage = 12;
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  ngAfterViewInit() {
    const myElement = document.getElementById("progress") as HTMLElement;
    myElement.style.width = `${this.percentage}%`;
  }  
}
