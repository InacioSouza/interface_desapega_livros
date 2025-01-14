import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaLivrosComponent } from './components/lista-livros/lista-livros.component';
import { LivroComponent } from './components/livro/livro.component';
import { LivroDetailComponent } from './components/livro-detail/livro-detail.component';
import { CabecalhoComponent } from './shared/components/cabecalho/cabecalho.component';
import { TelaHomeComponent } from './components/tela-home/tela-home.component';
import { VisualizaLivroComponent } from './components/visualiza-livro/visualiza-livro.component';
import { CadastraAutorComponent } from './components/cadastra-autor/cadastra-autor.component';
//import { CadastraLivroComponent } from './pages/cadastra-livro/cadastra-livro.component';
import { IdiomaSelectModule } from './shared/components/idioma-select/idioma-select.component';
import { IdiomasService } from './shared/services/idiomas.service';
import { HttpClientModule } from '@angular/common/http';

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
   
    // CadastraLivroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IdiomaSelectModule,
    HttpClientModule
  ],
  providers: [IdiomasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
