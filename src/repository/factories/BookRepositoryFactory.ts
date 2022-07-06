import { IBooksRepository } from "../interfaces/IBookRepository";
import {MongoBooksRepository} from "../mongodb/MongoBooksRepository";

export class BooksRepositoryFactory {
    public static createBooksRepositoryObj (): IBooksRepository {
        return new MongoBooksRepository();
    }
}