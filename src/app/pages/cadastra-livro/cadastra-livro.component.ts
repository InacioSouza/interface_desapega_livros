import { IdiomaSelectModule } from './../../shared/components/idioma-select/idioma-select.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ElementRef, ViewChild, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-cadastra-livro',
  templateUrl: './cadastra-livro.component.html',
  styleUrls: ['./cadastra-livro.component.css']
})
export class CadastraLivroComponent implements OnInit {

  imgBase64!: string;

  @ViewChild("exibeCapa") exibeCapa!: ElementRef<HTMLImageElement>;

  constructor() { }

  ngOnInit(): void {
  }

  carregaCapa(event: Event): void {

    const inputIMG = event.target as HTMLInputElement;

    if (inputIMG.files && inputIMG.files.length > 0) {
      const file = inputIMG.files[0];

      const reader = new FileReader();

      reader.onload = () => {
        this.imgBase64 = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }

  testIdioma(event: any) {
    console.log(event);
  }
}

const routes: Routes = [
  { path: '', component: CadastraLivroComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastraLivroRoutingModule { }

@NgModule({
  declarations: [CadastraLivroComponent],
  imports: [CommonModule,
    CadastraLivroRoutingModule,
    IdiomaSelectModule,
    
  ],
  providers: []
})
export class CadastraLivroModule { }

