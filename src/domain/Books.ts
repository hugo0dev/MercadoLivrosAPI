import { IBooksDTO } from '../dto/IBooksDTO';
import { IBooksPersistence } from '../../persistence/dataSchemas/IBooksPersistence';

export class Books {
    isbn13: string;
	titulo: string;
	autor: string;
    editora: string;
	posVendas: number;
	dataLancamento: Date;

    private constructor(isbn13: string,	titulo: string,	autor: string, editora: string, posVendas: number, dataLancamento: Date){
        this.isbn13 = isbn13;
	    this.titulo = titulo;
	    this.autor = autor;
        this.editora = editora;
	    this.posVendas = posVendas;
	    this.dataLancamento = dataLancamento;
    }

    public static instantiate(booksDTO: IBooksDTO | IBooksPersistence): Books {
        if( booksDTO.isbn13 &&
            booksDTO.titulo &&
            booksDTO.autor &&
            booksDTO.editora &&
            booksDTO.posVendas &&
            booksDTO.dataLancamento
          )
            return new Books(booksDTO.isbn13, booksDTO.titulo, booksDTO.autor, booksDTO.editora, booksDTO.posVendas, booksDTO.dataLancamento);
        else 
            throw new Error("Book fields cannot be empty nor wrongfully posted")
    }
}