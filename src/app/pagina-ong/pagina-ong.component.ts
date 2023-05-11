import {  AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-pagina-ong',
  templateUrl: './pagina-ong.component.html',
  styleUrls: ['./pagina-ong.component.css']
})
export class PaginaOngComponent implements AfterViewInit {
  constructor() { }
  percentage = 100;
  
  ngAfterViewInit() {
    const myElement = document.getElementById("progress") as HTMLElement;
    myElement.style.width = `${this.percentage}%`;
  }
}
