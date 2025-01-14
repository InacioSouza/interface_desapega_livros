import { CommonModule } from '@angular/common';
import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IAutor } from 'src/app/modelo/IAutor';
import { AutoresService } from '../../services/autores.service';
import { PopupCadastraAutorComponent } from './popup-cadastra-autor/popup-cadastra-autor.component';

@Component({
  selector: 'adiciona-autor',
  templateUrl: './adiciona-autor.component.html',
  styleUrls: ['./adiciona-autor.component.css']
})
export class AdicionaAutorComponent implements OnInit {

  autores: IAutor[] = [];
  autoresFiltrados: Set<IAutor> = new Set();

  termoDeBusca: string = '';

  textoBtnAdd: string = 'Adicionar';

  autoresAdicionados: IAutor[] = [];

  exibirPopup: boolean = false;
  novoAutor: string = '';

  @Output() listaDeAutores = new EventEmitter<IAutor[]>();

  constructor(private autorerService: AutoresService) { }

  ngOnInit(): void {
    this.autorerService.listaAutores().subscribe(resposta => this.autores = resposta);
    this.autorerService.lancaEvent();
  }

  filtraAutores(termo: string): void {


    if (termo !== '') {

      this.autoresFiltrados.clear();

      for (let i = 0; i < this.autores.length; i++) {

        let nomeAutor: string = (this.autores[i].nome + this.autores[i].sobrenome).toLowerCase();
        let nomeArtistivo: string = this.autores[i].nomeArtistico.toLowerCase();
        let termo = this.termoDeBusca.toLowerCase();

        if (nomeAutor.startsWith(termo) || nomeArtistivo.startsWith(termo)) {
          this.autoresFiltrados.add((this.autores[i]));
        }
      }

      if (this.autoresFiltrados.size == 0 && this.termoDeBusca.length >= 3) {
        this.textoBtnAdd = 'Cadastrar';
      } else {
        this.textoBtnAdd = 'Adicionar';
      }

    } else {

      this.autoresFiltrados.clear();
    }

  }

  limpaAutoresFiltrados(): void {

    setTimeout(() => {
      this.autoresFiltrados.clear()
    }, 250);
  }

  selecionaAutor(autor: IAutor): void {

    console.log(autor);

    this.termoDeBusca = '';

    console.log(this.verificaAutorAdicionado(autor));

    if (!this.verificaAutorAdicionado(autor)) {
      this.autoresAdicionados.unshift(autor);
    }
  }

  adicionaAutor(): void {

    if (this.termoDeBusca === '') {
      return;
    }

    for (let i = 0; i < this.autores.length; i++) {

      const autorExistente = (this.autores[i].nome === this.termoDeBusca ||
        this.autores[i].nomeArtistico === this.termoDeBusca ||
        (this.autores[i].nome + " " + this.autores[i].sobrenome) === this.termoDeBusca);

      if (autorExistente && this.verificaAutorAdicionado(this.autores[i])) {

        this.autoresAdicionados.unshift(this.autores[i]);

        this.listaDeAutores.emit(this.autoresAdicionados);
        return;
      }
    }

    this.novoAutor = this.termoDeBusca;

    this.exibirPopup = true;
  }

  removeAutor(autorRm: IAutor): void {

    this.autoresAdicionados = this.autoresAdicionados.filter(autor => autor !== autorRm);

    this.listaDeAutores.emit(this.autoresAdicionados);
  }

  cadastroAutor(event: any): void {
    console.log(event);

    this.exibirPopup = false;
    this.termoDeBusca = '';

    const autor: IAutor = {
      id: 1,
      nome: event.nome,
      sobrenome: event.sobrenome,
      nomeArtistico: event.nomeArtistico,
      nacionalidade: event.nacionalidade
    }

    /*if (this.verificaAutorAdicionado(autor)) {
      this.autoresAdicionados.unshift(autor);
    } */

    //Depois terei que adaptar para funcionar com requisições
    this.autores.push(autor);
    this.autoresAdicionados.unshift(autor);

  }

  verificaAutorAdicionado(autorAdd: IAutor): boolean {

    let jaCadastrado: boolean = false;

    this.autoresAdicionados.forEach(autor => {
      jaCadastrado = (autor == autorAdd);
    });

    return jaCadastrado;
  }

  fecharPopup(event: any): void {
    this.exibirPopup = !event;
  }
}

@NgModule({
  declarations: [AdicionaAutorComponent, PopupCadastraAutorComponent],
  imports: [CommonModule, FormsModule],
  exports: [AdicionaAutorComponent]
})
export class AdicionaAutorModule { }
