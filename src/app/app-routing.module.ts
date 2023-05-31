import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlimentoComponent } from './add-alimento/add-alimento.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { MinhasSolicitacoesComponent } from './minhas-solicitacoes/minhas-solicitacoes.component';
import { PaginaOngComponent } from './pagina-ong/pagina-ong.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { PesquisaDoarComponent } from './pesquisa-doar/pesquisa-doar.component';
import { TipoUsuarioComponent } from './tipo-usuario/tipo-usuario.component';
import { LoginComponent } from './login/login.component';
import { CadONGComponent } from './cad-ong/cad-ong.component';
import { CadUserComponent } from './cad-user/cad-user.component';
import { ConfCcComponent } from './conf-cc/conf-cc.component';
import { RecupPasswordComponent } from './recup-password/recup-password.component';
import { ConfEeComponent } from './conf-ee/conf-ee.component';
import { DeletarcontaComponent } from './deletarconta/deletarconta.component';
import { ComprovanteComponent } from './comprovante/comprovante.component';
import { FazerAgendamentoComponent } from './fazer-agendamento/fazer-agendamento.component';
import { PaginaDaSolicitacaoComponent } from './pagina-da-solicitacao/pagina-da-solicitacao.component';
import { MeusAgendamentosComponent } from './meus-agendamentos/meus-agendamentos.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { AgendaComponent } from './agenda/agenda.component';
import { EditarSolicitacaoComponent } from './editar-solicitacao/editar-solicitacao.component';

const routes: Routes = [
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'pesquisa', component: PesquisaDoarComponent },
  { path: 'add-solicitacao', component: AddAlimentoComponent },
  { path: 'pagina-ong/:id', component: PaginaOngComponent},
  {path: 'perfil/:tipo', component: PerfilUsuarioComponent},
  {path: 'minhas-solicitacoes', component: MinhasSolicitacoesComponent},
  {path: 'meus-dados', component: MeusDadosComponent},
  {path: 'cadastro', component: TipoUsuarioComponent },
  {path: 'cadastroONG', component: CadONGComponent},
  {path: 'cadastrousuario', component:CadUserComponent},
  {path: 'confirmacaodecad', component:ConfCcComponent},
  {path: 'recuperarsenha', component:RecupPasswordComponent},
  {path: 'confemail', component:ConfEeComponent},
  {path: 'deletarconta', component:DeletarcontaComponent},
  {path: 'comprovante', component:ComprovanteComponent},
  {path: 'criaragendamento', component:FazerAgendamentoComponent},
  {path: 'paginaSolicitacao', component: PaginaDaSolicitacaoComponent},
  {path: 'meusagendamentos', component: MeusAgendamentosComponent},
  {path: 'agendamento', component: AgendamentoComponent},
  {path: 'agenda',component: AgendaComponent},
  {path: 'editar-solicitacao',component: EditarSolicitacaoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
