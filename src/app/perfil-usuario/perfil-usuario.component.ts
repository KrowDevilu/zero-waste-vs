import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent{
  constructor(private router: Router,private app:AppModule) {}
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  autenticate(pageName:string){
    let rot = this.app.autenticate_route(pageName);
    this.router.navigate([`${rot}`]);
  }
  ngOnInit(): void {
    if (this.app.user == ''){
      this.router.navigate(['']);
    }
  }
}
