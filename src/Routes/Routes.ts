import { BooksRoute } from './BooksRoutes';

export class Routes{

    private _books: BooksRoute;

    constructor(){
        this._books = new BooksRoute();
    }

    
    public get books() : BooksRoute {
        return this._books;
    }   
}