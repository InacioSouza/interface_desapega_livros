import { Injectable } from "@angular/core";
import { Livro } from "../modelo/Livro";

@Injectable(
    { providedIn: 'root' }
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
                },
                {
                    id: 1,
                    nome: 'CS',
                    sobrenome: 'Lewis',
                    nomeArtistico: '',
                    nacionalidade: 'Inglês'
                },
                {
                    id: 1,
                    nome: 'CS',
                    sobrenome: 'Lewis',
                    nomeArtistico: '',
                    nacionalidade: 'Inglês'
                }, {
                    id: 1,
                    nome: 'CS',
                    sobrenome: 'Lewis',
                    nomeArtistico: '',
                    nacionalidade: 'Inglês'
                }
                , {
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
                { id: 1, nome: "Contos de fadas" },
                { id: 1, nome: "Fantasia" },
                { id: 1, nome: "Aventura" },
                { id: 1, nome: "Ficção" },
                { id: 1, nome: "Contos de fadas" },
                { id: 1, nome: "Fantasia" },
                { id: 1, nome: "Aventura" },
                { id: 1, nome: "Ficção" }
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
            descricao: `O menino que aprendeu a ser bruxo lorem
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lo`,
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