import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-alimento',
  templateUrl: './add-alimento.component.html',
  styleUrls: ['./add-alimento.component.css']
})
export class AddAlimentoComponent {
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
