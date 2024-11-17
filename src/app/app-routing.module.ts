import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroDetailComponent } from './components/livro-detail/livro-detail.component';
import { ListaLivrosComponent } from './components/lista-livros/lista-livros.component';
import { TelaHomeComponent } from './components/tela-home/tela-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'livroDetail', component: LivroDetailComponent },
  { path: 'home', component: TelaHomeComponent, 
    children: [
      {path: 'listaLivro', component: ListaLivrosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
