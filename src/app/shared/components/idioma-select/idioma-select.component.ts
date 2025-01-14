import { IdiomasService } from './../../services/idiomas.service';
import { Component, OnInit, Input, Output, NgModule, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'idioma-select',
  templateUrl: './idioma-select.component.html',
  styleUrls: ['./idioma-select.component.css']
})
export class IdiomaSelectComponent implements OnInit {

  @ViewChild('inputIdioma') inputIdioma!: ElementRef<HTMLInputElement>;

  @Input() default: string = '';
  @Output() idiomaSelecionado = new EventEmitter();

  idiomas!: string[];
  idiomasFiltrados: Set<string> = new Set([]);
  termoDeBusca: string = '';

  idiomaIncorreto: boolean = false;

  constructor(private idiomaService: IdiomasService) { }

  ngOnInit(): void {
    this.idiomas = this.idiomaService.listaIdiomas();

    if (this.idiomaSelecionado) {
      this.termoDeBusca = this.default;
    }
  }

  filtraIdiomas(termo: string): void {

    if (termo !== '') {

      this.idiomasFiltrados.clear();

      for (let i = 0; i < this.idiomas.length; i++) {
        if (this.idiomas[i].toLowerCase().startsWith(termo.toLowerCase()) === true) {
          this.idiomasFiltrados.add(this.idiomas[i]);
        }
      }
    } else {
      this.idiomasFiltrados.clear();
    }
  }

  selecionaIdioma(idioma: string): void {
    this.termoDeBusca = idioma;
    this.idiomaSelecionado.emit(idioma);
    this.idiomasFiltrados.clear();

    this.idiomaSelecionado.emit(idioma);
    this.inputIdioma.nativeElement.style.borderColor = 'rgb(206, 207, 207)';
  }

  escolheIdiomaLista(event: any) {

    if (event.key === 'Enter' && this.idiomasFiltrados.size > 0) {
      this.termoDeBusca = this.idiomasFiltrados.values().next().value as string;
    }

    this.idiomasFiltrados.clear();
    this.inputIdioma.nativeElement.style.borderColor = 'rgb(206, 207, 207)';
  }

  limpaIdiomasFiltrados() {

    setTimeout(() => {
      this.idiomasFiltrados.clear();

      if (this.termoDeBusca === '' || this.termoDeBusca.length < 3) {
        this.idiomaIncorreto = true;
        this.inputIdioma.nativeElement.style.borderColor = 'red';

      } else {
        this.inputIdioma.nativeElement.style.borderColor = 'rgb(206, 207, 207)';
        this.idiomaIncorreto = false;
      }
    }, 100);
  }
}

@NgModule({
  declarations: [IdiomaSelectComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    IdiomaSelectComponent
  ]
})
export class IdiomaSelectModule { }
