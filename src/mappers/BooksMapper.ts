import { IBooksDTO } from '../dto/IBooksDTO';
import { IBooksPersistence } from '../persistence/dataSchemas/IBooksPersistence';
import { Books } from "../domain/Books";

export class BooksMapper{

    public static toDTO(book: Books) : IBooksDTO {
        return {
            isbn13: book.isbn13,
            titulo: book.titulo,
            autor: book.autor,
            editora: book.editora,
            posVendas: book.posVendas,
            dataLancamento: book.dataLancamento
        } as IBooksDTO;
    }

    public static toPersistence(book: Books): IBooksPersistence {
        return {
            isbn13: book.isbn13,
            titulo: book.titulo,
            autor: book.autor,
            editora: book.editora,
            posVendas: book.posVendas,
            dataLancamento: book.dataLancamento
        } as IBooksPersistence;
    }

    public static toDomain(book: IBooksDTO | IBooksPersistence): Books {
        return Books.instantiate(book)
    }
}