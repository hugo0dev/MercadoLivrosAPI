import express from "express";
import mongoose from "mongoose";
import { Routes } from "./src/Routes/Routes";

export class App {
	public app: express.Application = express();
	public routes: Routes = new Routes();
	//public mongoUrl: string = 'mongodb://localhost:27017/tsomsapp';
	public mongoUrl: string = "mongodb+srv://rfcapinto:jU3y5KyG0SGOTBW6@rap.gkr0qdr.mongodb.net/booksMercado?retryWrites=true&w=majority";

	// construtor inicializa os atributos
	constructor() {
		this.config();
		this.mongoSetup();
		this.routes.books.routes(this.app);
	}

	private config(): void {
		this.app.use(express.json());
	}

	private mongoSetup(): void {
		mongoose.connect(this.mongoUrl);
	}
}

export const datasource = {
	repository: "mongo", // json
};

export default new App().app;
