import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements AfterViewInit{
  constructor(private router: Router,private app:AppModule) {}
  tipoConta = "";
  percentage = 12;
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  autenticate(pageName:string){
    let rot = this.app.autenticate_route(pageName);
    this.router.navigate([`${rot}`]);
  }
  ngAfterViewInit() {
    const myElement = document.getElementById("progress") as HTMLElement;
    myElement.style.width = `${this.percentage}%`;
  }  
  ngOnInit(): void {
    this.tipoConta = this.app.getAutentication();
    // console.log(this.tipoConta);
    // if (this.tipoConta == ''){
    //   this.router.navigate(['']);
    // }
  }
}
