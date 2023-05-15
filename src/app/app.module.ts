import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoUsuarioComponent } from './tipo-usuario/tipo-usuario.component';
import { PesquisaDoarComponent } from './pesquisa-doar/pesquisa-doar.component';
import { AddAlimentoComponent } from './add-alimento/add-alimento.component';
import { PaginaOngComponent } from './pagina-ong/pagina-ong.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { MinhasSolicitacoesComponent } from './minhas-solicitacoes/minhas-solicitacoes.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';

@NgModule({
  declarations: [
    AppComponent,
    TipoUsuarioComponent,
    PesquisaDoarComponent,
    AddAlimentoComponent,
    PaginaOngComponent,
    PerfilUsuarioComponent,
    MinhasSolicitacoesComponent,
    MeusDadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router) {}
  user = "";
  autenticate(tipo : String){
    // @ts-ignore: Object is possibly 'null'.
    this.user = tipo;
  }
  autenticate_route(rota: String){
    if (rota == 'solicitacoes'){
      if (this.user == "doador"){
        return 'pesquisa';
      }
      else if (this.user == "ong"){
        return 'minhas-solicitacoes';
      }else{
        return '';
      }
    }else{
      return '';
    }
  }
 }
