import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlimentoComponent } from './add-alimento/add-alimento.component';
import { MinhasSolicitacoesComponent } from './minhas-solicitacoes/minhas-solicitacoes.component';
import { PaginaOngComponent } from './pagina-ong/pagina-ong.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { PesquisaDoarComponent } from './pesquisa-doar/pesquisa-doar.component';
import { TipoUsuarioComponent } from './tipo-usuario/tipo-usuario.component';

const routes: Routes = [
  { path: '', component: TipoUsuarioComponent },
  { path: 'pesquisa', component: PesquisaDoarComponent },
  { path: 'add-solicitacao', component: AddAlimentoComponent },
  {path: 'pagina-ong', component: PaginaOngComponent},
  {path: 'perfil/:tipo', component: PerfilUsuarioComponent},
  {path: 'minhas-solicitacoes', component: MinhasSolicitacoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
