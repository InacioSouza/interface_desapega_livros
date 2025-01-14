import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Autor } from 'src/app/modelo/Autor';

@Component({
  selector: 'popup-cadastra-autor',
  templateUrl: './popup-cadastra-autor.component.html',
  styleUrls: ['./popup-cadastra-autor.component.css']
})
export class PopupCadastraAutorComponent implements OnInit {

  @Input() termo!: string;
  @Output() autorCadastrado = new EventEmitter<Autor>();

  @Output() sairPopup = new EventEmitter<boolean>();

  nome: string = '';
  sobrenome: string = '';
  nacionalidade: string = '';
  nomeArtistico: string = '';

  constructor() { }

  ngOnInit(): void {

    console.log(this.termo)

    if (this.termo) {

      const nomes: string[] = this.termo.split(" ");

      if (nomes.length > 1) {

        for (let i = 1; i < nomes.length; i++) {
          this.sobrenome += nomes[i] + ' ';
        }

      }

      this.nome = nomes[0];
    }
  }

  cadastraAutor(): void {
    const autor: Autor = new Autor(this.nome, this.sobrenome, this.nomeArtistico, this.nacionalidade);

    this.autorCadastrado.emit(autor);
  }

  sairDoPopup(): void {

    console.log('Dentro de sairDoPopup()');

    this.nome = '';
    this.sobrenome = '';
    this.nacionalidade = '';
    this.nomeArtistico = '';

    this.sairPopup.emit(true);
  }
}
