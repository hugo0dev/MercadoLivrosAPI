import { BooksService } from "../service/BooksService";
import { Request, Response, NextFunction } from "express";
import { IBooksDTO } from "../dto/IBooksDTO";

export class BooksController {
	private service: BooksService;

	constructor() {
		this.service = new BooksService();
	}
/*
	post = async (req: Request, res: Response, next: NextFunction) => {
		try {
			let booksDto: IBooksDTO = req.body;
			let result = await this.service.createBook(booksDto);            
            res.status(201).send(result);
		} catch (error) {
			res.status(503).send((error as Error).message);
		}
	};

	put = async (req: Request, res: Response, next: NextFunction) => {
		try {
			let codBook = req.params.id_book;
			let body: IBooksDTO = req.body;
			let result = await this.service.updateBooks(codBook, body);
			res.status(200).send(result);
		} catch (error) {
			res.status(503).send((error as Error).message);
		}
	};
*/
	get = async (req: Request, res: Response, next: NextFunction) => {
	try {
			let result = await this.service.getAllBooks();
			if(result.length===0){
				return res.status(404).send("There are no books in the database")
			}
			res.status(200).send(result);
		} catch (error) {
			res.status(503).send((error as Error).message);
		}
	};

/*
	getTop10Sales = async (req: Request, res: Response, next: NextFunction) => {

//// programar
 
        try {
			let codBook = req.params.id_book;
			let result = await this.service.getBooksById(codBook);
			res.status(200).send(result);
		} catch (error) {
			res.status(503).send((error as Error).message);
		}
	};

	get10MostRecent = async (req: Request, res: Response) => {
		try {
			let codEditora = req.params.id;
			let result = await this.service.getBookdByEditora(codEditora);
			res.status(200).json(result);
		} catch (error) {
			res.status(503).send((error as Error).message);
		}
	};
*/
}
