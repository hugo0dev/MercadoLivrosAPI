import { Books } from "../../domain/Books";

export interface IBooksRepository {
	
	findAll: () => Promise<Array<Books>>;
	/*findTop10Sales: () => Promise<Array<Books>>;
	find10MostRecent: () => Promise<Array<Books>>;
	saveToDB: (books: Books) => Promise<Books>;*/
}

