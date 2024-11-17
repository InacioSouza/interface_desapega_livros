import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/interfaces/Livro';
import { Popula } from 'src/app/mocks/Popula';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnInit {

  constructor(private popula: Popula) { }

  Livros?: Livro[];

  ngOnInit(): void {
    this.Livros = this.popula.retornaLivros();
  }

}
