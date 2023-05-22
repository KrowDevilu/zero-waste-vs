import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recup-password',
  templateUrl: './recup-password.component.html',
  styleUrls: ['./recup-password.component.css']
})
export class RecupPasswordComponent {
  constructor(private router: Router) {}
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
