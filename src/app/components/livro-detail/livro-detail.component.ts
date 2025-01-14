import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/modelo/Livro';
import { DataLivroService } from 'src/app/services/data-livro.service';

@Component({
  selector: 'app-livro-detail',
  templateUrl: './livro-detail.component.html',
  styleUrls: ['./livro-detail.component.css']
})
export class LivroDetailComponent implements OnInit {

  livro?: Livro;

  constructor(private dataLivro: DataLivroService) { }

  ngOnInit(): void {
    this.livro = this.dataLivro.getLivro() as Livro;
  }

}
