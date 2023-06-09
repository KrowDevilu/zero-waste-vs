import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private app: AppModule) {}
  login(){
    this.router.navigate([`cadastro${this.app.getAutentication()}`]);
  }
  ngOnInit(): void {
    if (this.app.user != ''){
      this.router.navigate([`perfil/${this.app.getAutentication()}`]);
    }
  }
}
