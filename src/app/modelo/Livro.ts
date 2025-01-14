import { IAutor } from "./IAutor"
import { Editora } from "./Editora"
import { Categoria } from "./Categoria"
import { Lingua } from "./LIingua"

export interface Livro {
    id: Number,
    titulo: string,
    descricao: string,
    autores: IAutor[],
    editora: Editora,
    categorias: Categoria[],
    dtPublicacao: Date,
    lingua: Lingua
}