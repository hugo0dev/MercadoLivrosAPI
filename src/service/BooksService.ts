import { IBooksService } from './interfaces/IBooksService';
import { IBooksRepository } from '../repository/interfaces/IBookRepository';
import { BooksRepositoryFactory } from '../repository/factories/BookRepositoryFactory';
import { IBooksDTO } from '../dto/IBooksDTO';
import { BooksMapper } from '../mappers/BooksMapper';

export class BooksService implements IBooksService {
	
	private bookRepository: IBooksRepository;

	constructor() {
		this.bookRepository = BooksRepositoryFactory.createBooksRepositoryObj();
	}

	async getAllBooks() {
		console.log("BooksService: getAllBooks");
		let docs = await this.bookRepository.findAll();
		return docs.map(doc => BooksMapper.toDTO(doc));
	}
/*
	async getAllBooks() {
		console.log("BooksService: getAllBooks");

		let result = await this.repository.findAll();
		// console.log(result);
		return result.map((item) => BooksMapper.toDTO(item));
	}

	async getAllBooksInStock() {
		console.log("BooksService: getAllBooksInStock");

		let result = await this.repository.findInStock();
		// console.log(result);
		return result.map((item) => BooksMapper.toDTO(item));
	}

	async getBooksById(isbn13: string): Promise<IBooksDTO> {
		console.log("BooksService: getBooksById: " + isbn13);

		return BooksMapper.toDTO(await this.repository.findById(isbn13));
	}

	async createBooks(booksDto: IBooksDTO): Promise<IBooksDTO> {
		console.log("BooksService: createBooks: " + JSON.stringify(booksDto));
		//verifica categoria
		let categoriaCheck = await this.serviceCategoria.getCategoryById(booksDto.categoria);
		if (!categoriaCheck) {
			throw new Error("Categoria não existe!");
		}
		//verifica editora
		let editoraCheck = await this.serviceEditora.getEditoraByID(booksDto.editora);
		if (!editoraCheck) {
			throw new Error("Editora não existe!");
		}
		let books = BooksMapper.toDomain(booksDto);
		let result: Books = await this.repository.save(books);
		return BooksMapper.toDTO(result);
	}

	async updateBooks(isbn13: string, booksDto: IBooksDTO): Promise<IBooksDTO> {
		console.log("BooksService: updateBooks: " + isbn13 + " " + JSON.stringify(booksDto));

		let bookFound = await this.getBooksById(isbn13);
		let books = BooksMapper.toDomain(bookFound);
		books.isAvailable(booksDto.stock);
		let result: Books = await this.repository.updateById(isbn13, booksDto.stock);
		return BooksMapper.toDTO(result);
	}

	async getBookdByEditora(editoraId: string): Promise<IBooksDTO[]> {
		console.log("BooksService: getBookdByEditora: " + JSON.stringify(editoraId));

		let books: Books[] = await this.repository.findByEditora(editoraId);
		return books.map((book) => BooksMapper.toDTO(book));
	}

	async getBookByCategory(categoryCode: string): Promise<IBooksDTO[]> {
		console.log("BooksService: getBookByCategory: " + JSON.stringify(categoryCode));

		let books: Books[] = await this.repository.findByCategory(categoryCode);
		return books.map((book) => BooksMapper.toDTO(book));
	}
*/
}
