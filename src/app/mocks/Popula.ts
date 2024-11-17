import { Injectable } from "@angular/core";
import { Livro } from "../interfaces/Livro";

 @Injectable(
    { providedIn: 'root'}
)
 export class Popula {

    constructor() { }

     LIVROS: Livro[] = [
        {
            id: 1,
            titulo: "As crônicas de Nárnia",
            autores: [
                {
                    id: 1,
                    nome: 'CS',
                    sobrenome: 'Lewis',
                    nomeArtistico: '',
                    nacionalidade: 'Inglês'
                }
            ],
            descricao: "livro que mostra o incrível mundo de Aslan o grande leão protetor das teras de Nárnia",
            editora: { id: 1, nome: "Sextante" },
            categorias: [
                { id: 1, nome: "Contos de fadas" }
            ],
            dtPublicacao: new Date('09 12 2005'),
            lingua: { id: 1, nome: 'Português' }
        },

        {
            id: 2,
            titulo: "Harry Poter",
            autores: [
                {
                    id: 2,
                    nome: 'Jk',
                    sobrenome: 'Rowling',
                    nomeArtistico: '',
                    nacionalidade: 'Americana'
                }
            ],
            descricao: "O menino que aprendeu a ser bruxo",
            editora: { id: 2, nome: "Rocco" },
            categorias: [
                { id: 1, nome: "Contos de fadas" }
            ],
            dtPublicacao: new Date('19 08 2007'),
            lingua: { id: 1, nome: 'Português' }
        },

        {
            id: 2,
            titulo: "Harry Poter",
            autores: [
                {
                    id: 2,
                    nome: 'Jk',
                    sobrenome: 'Rowling',
                    nomeArtistico: '',
                    nacionalidade: 'Americana'
                }
            ],
            descricao: "O menino que aprendeu a ser bruxo",
            editora: { id: 2, nome: "Rocco" },
            categorias: [
                { id: 1, nome: "Contos de fadas" }
            ],
            dtPublicacao: new Date('19 08 2007'),
            lingua: { id: 1, nome: 'Português' }
        },

        {
            id: 2,
            titulo: "Harry Poter",
            autores: [
                {
                    id: 2,
                    nome: 'Jk',
                    sobrenome: 'Rowling',
                    nomeArtistico: '',
                    nacionalidade: 'Americana'
                }
            ],
            descricao: "O menino que aprendeu a ser bruxo",
            editora: { id: 2, nome: "Rocco" },
            categorias: [
                { id: 1, nome: "Contos de fadas" }
            ],
            dtPublicacao: new Date('19 08 2007'),
            lingua: { id: 1, nome: 'Português' }
        },

        {
            id: 2,
            titulo: "Harry Poter",
            autores: [
                {
                    id: 2,
                    nome: 'Jk',
                    sobrenome: 'Rowling',
                    nomeArtistico: '',
                    nacionalidade: 'Americana'
                }
            ],
            descricao: "O menino que aprendeu a ser bruxo",
            editora: { id: 2, nome: "Rocco" },
            categorias: [
                { id: 1, nome: "Contos de fadas" }
            ],
            dtPublicacao: new Date('19 08 2007'),
            lingua: { id: 1, nome: 'Português' }
        },

        {
            id: 2,
            titulo: "Harry Poter",
            autores: [
                {
                    id: 2,
                    nome: 'Jk',
                    sobrenome: 'Rowling',
                    nomeArtistico: '',
                    nacionalidade: 'Americana'
                }
            ],
            descricao: "O menino que aprendeu a ser bruxo",
            editora: { id: 2, nome: "Rocco" },
            categorias: [
                { id: 1, nome: "Contos de fadas" }
            ],
            dtPublicacao: new Date('19 08 2007'),
            lingua: { id: 1, nome: 'Português' }
        },

        {
            id: 2,
            titulo: "Harry Poter",
            autores: [
                {
                    id: 2,
                    nome: 'Jk',
                    sobrenome: 'Rowling',
                    nomeArtistico: '',
                    nacionalidade: 'Americana'
                }
            ],
            descricao: "O menino que aprendeu a ser bruxo",
            editora: { id: 2, nome: "Rocco" },
            categorias: [
                { id: 1, nome: "Contos de fadas" }
            ],
            dtPublicacao: new Date('19 08 2007'),
            lingua: { id: 1, nome: 'Português' }
        },

        {
            id: 2,
            titulo: "Harry Poter",
            autores: [
                {
                    id: 2,
                    nome: 'Jk',
                    sobrenome: 'Rowling',
                    nomeArtistico: '',
                    nacionalidade: 'Americana'
                }
            ],
            descricao: "O menino que aprendeu a ser bruxo",
            editora: { id: 2, nome: "Rocco" },
            categorias: [
                { id: 1, nome: "Contos de fadas" }
            ],
            dtPublicacao: new Date('19 08 2007'),
            lingua: { id: 1, nome: 'Português' }
        },

        {
            id: 2,
            titulo: "Harry Poter",
            autores: [
                {
                    id: 2,
                    nome: 'Jk',
                    sobrenome: 'Rowling',
                    nomeArtistico: '',
                    nacionalidade: 'Americana'
                }
            ],
            descricao: "O menino que aprendeu a ser bruxo",
            editora: { id: 2, nome: "Rocco" },
            categorias: [
                { id: 1, nome: "Contos de fadas" }
            ],
            dtPublicacao: new Date('19 08 2007'),
            lingua: { id: 1, nome: 'Português' }
        },

        {
            id: 2,
            titulo: "Harry Poter",
            autores: [
                {
                    id: 2,
                    nome: 'Jk',
                    sobrenome: 'Rowling',
                    nomeArtistico: '',
                    nacionalidade: 'Americana'
                }
            ],
            descricao: "O menino que aprendeu a ser bruxo",
            editora: { id: 2, nome: "Rocco" },
            categorias: [
                { id: 1, nome: "Contos de fadas" }
            ],
            dtPublicacao: new Date('19 08 2007'),
            lingua: { id: 1, nome: 'Português' }
        },

        {
            id: 2,
            titulo: "Harry Poter",
            autores: [
                {
                    id: 2,
                    nome: 'Jk',
                    sobrenome: 'Rowling',
                    nomeArtistico: '',
                    nacionalidade: 'Americana'
                }
            ],
            descricao: "O menino que aprendeu a ser bruxo",
            editora: { id: 2, nome: "Rocco" },
            categorias: [
                { id: 1, nome: "Contos de fadas" }
            ],
            dtPublicacao: new Date('19 08 2007'),
            lingua: { id: 1, nome: 'Português' }
        },

        {
            id: 2,
            titulo: "Harry Poter",
            autores: [
                {
                    id: 2,
                    nome: 'Jk',
                    sobrenome: 'Rowling',
                    nomeArtistico: '',
                    nacionalidade: 'Americana'
                }
            ],
            descricao: "O menino que aprendeu a ser bruxo",
            editora: { id: 2, nome: "Rocco" },
            categorias: [
                { id: 1, nome: "Contos de fadas" }
            ],
            dtPublicacao: new Date('19 08 2007'),
            lingua: { id: 1, nome: 'Português' }
        },

        {
            id: 2,
            titulo: "Harry Poter",
            autores: [
                {
                    id: 2,
                    nome: 'Jk',
                    sobrenome: 'Rowling',
                    nomeArtistico: '',
                    nacionalidade: 'Americana'
                }
            ],
            descricao: "O menino que aprendeu a ser bruxo",
            editora: { id: 2, nome: "Rocco" },
            categorias: [
                { id: 1, nome: "Contos de fadas" }
            ],
            dtPublicacao: new Date('19 08 2007'),
            lingua: { id: 1, nome: 'Português' }
        }


        
    ]

    retornaLivros(): Livro[] {
        return this.LIVROS;
    }
}