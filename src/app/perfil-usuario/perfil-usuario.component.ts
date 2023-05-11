import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent {
  constructor(private router: Router) {}
  user = "Doador";
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  solicitacao(){
    if (this.user == "Doador"){
      return 'pesquisa';
    }else if (this.user == "ONG"){
      return 'minhas-solicitacoes';
    }else{
      return '';
    }

  }
}
