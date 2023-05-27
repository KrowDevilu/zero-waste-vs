import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent {
  constructor(private router: Router) {}
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
