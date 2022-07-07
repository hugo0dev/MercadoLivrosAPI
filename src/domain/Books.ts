import { IBooksDTO } from '../dto/IBooksDTO';
import { IBooksPersistence } from '../persistence/dataSchemas/IBooksPersistence';

export class Books {
    isbn13: string;
	titulo: string;
	autor: string;
    editora: string;
	posVenda: number;
	dataLancamento: Date;

    private constructor(isbn13: string,	titulo: string,	autor: string, editora: string, posVenda: number, dataLancamento: Date){
        this.isbn13 = isbn13;
	    this.titulo = titulo;
	    this.autor = autor;
        this.editora = editora;
	    this.posVenda = posVenda;
	    this.dataLancamento = dataLancamento;
    }

    public static instantiate(booksDTO: IBooksDTO | IBooksPersistence): Books {
        
        console.log("booksDTO:",booksDTO);
        console.log("isbn13:",booksDTO.isbn13);
        console.log("titulo:",booksDTO.titulo);
        console.log("autor:",booksDTO.autor);
        console.log("editora:",booksDTO.editora);
        console.log("posVenda:", booksDTO.posVenda);
        console.log("dataLancamento:",booksDTO.dataLancamento);

        if( booksDTO.isbn13 &&
            booksDTO.titulo &&
            booksDTO.autor &&
            booksDTO.editora &&
            booksDTO.posVenda &&
            booksDTO.dataLancamento
          )
            return new Books(booksDTO.isbn13, booksDTO.titulo, booksDTO.autor, booksDTO.editora, booksDTO.posVenda, booksDTO.dataLancamento);
        else 
            throw new Error("Book fields cannot be empty nor wrongfully posted")
    }
}