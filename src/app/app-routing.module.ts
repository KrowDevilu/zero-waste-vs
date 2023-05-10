import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlimentoComponent } from './add-alimento/add-alimento.component';
import { PaginaOngComponent } from './pagina-ong/pagina-ong.component';
import { PesquisaDoarComponent } from './pesquisa-doar/pesquisa-doar.component';
import { TipoUsuarioComponent } from './tipo-usuario/tipo-usuario.component';

const routes: Routes = [
  { path: '', component: TipoUsuarioComponent },
  { path: 'pesquisa', component: PesquisaDoarComponent },
  { path: 'add-solicitacao', component: AddAlimentoComponent },
  {path: 'pagina-ong', component: PaginaOngComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
