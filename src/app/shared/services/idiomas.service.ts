import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {

  constructor(private http: HttpClient) { }

  idiomas: string[] = [
    'Português',
    'Espanhol',
    'Inglês',
    'indico',
    'iraniano',
    'inteligível',
    'Russo',
    'Italiano',
    'Francês',
    'Japonês',
    'Chinês',
  ];

  public listaIdiomas(): string[] {
    return this.idiomas;
  }
}
