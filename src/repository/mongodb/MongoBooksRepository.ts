import { IBooksRepository }  from "../interfaces/IBookRepository";
import { IBooksDTO } from "../../dto/IBooksDTO";
import BooksSchema from "../../persistence/schemas/BooksSchema";
import { IBooksPersistence } from '../../persistence/dataSchemas/IBooksPersistence';
import { BooksMapper } from '../../mappers/BooksMapper';

export class MongoBooksRepository implements IBooksRepository{

    constructor(){

    }

    async findAll() : Promise<IBooksDTO[]>{
        console.log("MongoBooksRepository: getAllBooks: <program passed here>");
        let booksDocs = await BooksSchema.find().sort({posVenda:1}).limit(10);
        console.log("booksDocs:", booksDocs)
        
        if(booksDocs.length==0)
            console.log("No books were found.")
        return booksDocs.map((doc: IBooksDTO | IBooksPersistence) => BooksMapper.toDomain(doc))
    }
/*  
	createBook: (booksDto: IBooksDTO) => Promise<IBooksDTO>;
	getTop10Sales : () => Promise<IBooksDTO[]>;
	get10MostRecent : () => Promise<IBooksDTO[]>; 
*/}