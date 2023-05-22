import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comprovante',
  templateUrl: './comprovante.component.html',
  styleUrls: ['./comprovante.component.css']
})
export class ComprovanteComponent {
  constructor(private router:Router){}
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
