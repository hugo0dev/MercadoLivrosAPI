import { IBooksDTO } from "../../dto/IBooksDTO";

export interface IBooksService {
	getAllBooks: () => Promise<IBooksDTO[]>;
/*	createBook: (booksDto: IBooksDTO) => Promise<IBooksDTO>;
	getTop10Sales : () => Promise<IBooksDTO[]>;
	get10MostRecent : () => Promise<IBooksDTO[]>; */
}
