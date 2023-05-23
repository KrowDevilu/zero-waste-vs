import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
@Component({
  selector: 'app-cad-ong',
  templateUrl: './cad-ong.component.html',
  styleUrls: ['./cad-ong.component.css']
})
export class CadONGComponent {
  constructor(private router: Router, private app: AppModule) {}
  login(){
    let aut = this.app.getAutentication();
    if (aut == ''){
      aut = 'ong';
      this.app.autenticate(aut);
    }
    this.router.navigate([`perfil/${aut}`]);
  }
}
