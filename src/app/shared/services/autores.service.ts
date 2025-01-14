import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IAutor } from 'src/app/modelo/IAutor';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  sub: Subject<IAutor[]> = new Subject();

  obs: Observable<IAutor[]> = this.sub.asObservable();

  autores: IAutor[] = [{ id: 1, nome: 'Cs Lewis', sobrenome: 'Lewis', nomeArtistico: 'Cs', nacionalidade: 'Inglês' },
  { id: 1, nome: 'João', sobrenome: 'Chavier', nomeArtistico: 'Jc', nacionalidade: 'Americano' },
  { id: 1, nome: 'Fulano', sobrenome: 'Alguém', nomeArtistico: 'Lá da Rua', nacionalidade: 'Brasileiro' },
  { id: 1, nome: 'Lála', sobrenome: 'Maromba', nomeArtistico: '', nacionalidade: 'Russo' },
  { id: 1, nome: 'Yudi', sobrenome: 'Itadori de Jujutsu aluno potencial Itadori de Jujutsu aluno potencial', nomeArtistico: 'Sukuna', nacionalidade: 'Russo' },
  { id: 1, nome: 'Capivara 1', sobrenome: 'animal', nomeArtistico: '', nacionalidade: 'Brasileiro' },
  { id: 1, nome: 'Capivara 2', sobrenome: 'animal', nomeArtistico: '', nacionalidade: 'Brasileiro' },
  { id: 1, nome: 'Capivara 3', sobrenome: 'animal', nomeArtistico: '', nacionalidade: 'Brasileiro' },
  { id: 1, nome: 'Capivara 4', sobrenome: 'animal', nomeArtistico: '', nacionalidade: 'Brasileiro' },
  { id: 1, nome: 'Capivara 5', sobrenome: 'animal', nomeArtistico: '', nacionalidade: 'Brasileiro' },
  { id: 1, nome: 'Capivara 6', sobrenome: 'animal', nomeArtistico: '', nacionalidade: 'Brasileiro' }

  ];

  constructor() { }

  listaAutores(): Observable<IAutor[]> {
    return this.obs;
  }

  lancaEvent() {
    this.sub.next(this.autores);
  }
}
