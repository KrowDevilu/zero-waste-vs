import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoUsuarioComponent } from './tipo-usuario/tipo-usuario.component';
import { PesquisaDoarComponent } from './pesquisa-doar/pesquisa-doar.component';
import { AddAlimentoComponent } from './add-alimento/add-alimento.component';
import { PaginaOngComponent } from './pagina-ong/pagina-ong.component';

@NgModule({
  declarations: [
    AppComponent,
    TipoUsuarioComponent,
    PesquisaDoarComponent,
    AddAlimentoComponent,
    PaginaOngComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
