import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroDetailComponent } from './components/livro-detail/livro-detail.component';
import { ListaLivrosComponent } from './components/lista-livros/lista-livros.component';

const routes: Routes = [
  { path: '', redirectTo: '/listaLivro', pathMatch: 'full' },
  { path: 'livroDetail', component: LivroDetailComponent },
  { path: 'listaLivro', component: ListaLivrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
