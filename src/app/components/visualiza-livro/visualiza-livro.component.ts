import { Component, OnInit, Input } from '@angular/core';
import { Livro } from 'src/app/modelo/Livro';
import { DataLivroService } from 'src/app/services/data-livro.service';

@Component({
  selector: 'app-visualiza-livro',
  templateUrl: './visualiza-livro.component.html',
  styleUrls: ['./visualiza-livro.component.css']
})
export class VisualizaLivroComponent implements OnInit {

  @Input() livro?: Livro;

  constructor(private livroService: DataLivroService) { }

  ngOnInit(): void {
    this.livro = this.livroService.getLivro();
  }

}
