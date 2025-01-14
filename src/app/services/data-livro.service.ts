import { Injectable } from '@angular/core';
import { Livro } from '../interfaces/Livro';

@Injectable({
  providedIn: 'root'
})
export class DataLivroService {

  private livro?: Livro;

  constructor() { }

  setLivro(livro: any){
    this.livro = livro;
  }

  getLivro(){
    return this.livro;
  }
}
