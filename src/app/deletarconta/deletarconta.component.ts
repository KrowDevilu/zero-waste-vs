import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deletarconta',
  templateUrl: './deletarconta.component.html',
  styleUrls: ['./deletarconta.component.css']
})
export class DeletarcontaComponent {
  constructor(private router: Router) {}
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
