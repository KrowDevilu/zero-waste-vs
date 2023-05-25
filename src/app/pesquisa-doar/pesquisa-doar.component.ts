import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pesquisa-doar',
  templateUrl: './pesquisa-doar.component.html',
  styleUrls: ['./pesquisa-doar.component.css']
})
export class PesquisaDoarComponent {
  constructor(private router: Router) {}
  goToPage(pageName:string){
   this.router.navigate([`${pageName}`]);
 }
}
