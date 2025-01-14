import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaLivrosComponent } from './components/lista-livros/lista-livros.component';
import { LivroComponent } from './components/livro/livro.component';
import { LivroDetailComponent } from './components/livro-detail/livro-detail.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { TelaHomeComponent } from './components/tela-home/tela-home.component';
import { VisualizaLivroComponent } from './components/visualiza-livro/visualiza-livro.component';
import { CadastraAutorComponent } from './components/cadastra-autor/cadastra-autor.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaLivrosComponent,
    LivroComponent,
    LivroDetailComponent,
    CabecalhoComponent,
    TelaHomeComponent,
    VisualizaLivroComponent,
    CadastraAutorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
