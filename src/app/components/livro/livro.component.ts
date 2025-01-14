import { Component, Input, OnInit } from '@angular/core';
import { Livro } from 'src/app/modelo/Livro';
import { DataLivroService } from 'src/app/services/data-livro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  @Input() livro?: Livro;
  
  constructor(private dataLivro: DataLivroService, private router: Router){}  

  ngOnInit(): void {
  }

  editaLivro(){
    this.dataLivro.setLivro(this.livro);
    this.router.navigate(['livroDetail']);
  }

  visualizaLivro(){
    this.dataLivro.setLivro(this.livro);
    this.router.navigate(['visualizaLivro'])
  }

  test(){
    alert('Está funcionando!')
  }
}
