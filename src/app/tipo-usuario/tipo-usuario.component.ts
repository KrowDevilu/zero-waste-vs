import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-usuario',
  templateUrl: './tipo-usuario.component.html',
  styleUrls: ['./tipo-usuario.component.css']
})
export class TipoUsuarioComponent {
constructor(private router: Router) {}
 goToPage(pageName:string){
  this.router.navigate([`${pageName}`]);
}

}
