import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
@Component({
  selector: 'app-cad-user',
  templateUrl: './cad-user.component.html',
  styleUrls: ['./cad-user.component.css']
})
export class CadUserComponent {
  constructor(private router: Router, private app: AppModule) {}
  login(){
    let aut = this.app.getAutentication();
    if (aut == ""){
      aut = "doador";
      this.app.autenticate(aut);
    }
    this.router.navigate([`perfil/${aut}`]);
  }
}
