import { Router } from "express";
import { BooksController } from "../controllers/BooksController";

export class BooksRoute {
	private controller: BooksController;

	constructor() {
		this.controller = new BooksController();
	}

	routes(app: Router) {
		app.post("/api/books", this.controller.post);
		//app.put("/api/books/:id_book", this.controller.put);
		app.get("/api/books", this.controller.get); //GET ALL BOOKS
		app.get("/api/books/sales/top10", this.controller.getTop10Sales);//GET TOP 10 SALES BOOKS
		app.get("/api/books/release/top10", this.controller.get10MostRecent);// GET 10 MOST RECENT RELEASES
	}
}
