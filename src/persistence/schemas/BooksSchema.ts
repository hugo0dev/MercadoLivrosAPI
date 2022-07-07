import mongoose from 'mongoose';
import { IBooksPersistence } from '../dataSchemas/IBooksPersistence';

const BooksSchema = new mongoose.Schema(
    {
        isbn13: {type: String, required: true, unique: true},
        titulo: {type: String, required: true, unique: true},
        autor: {type: String, required: true},
        editora: {type: String},
        posVenda: {type: Number, unique: true},
/*        dataLancamento: {type: Date}        */
    },
    {
        collection : "booksMercado",
        timestamps: true
    }
);

export default mongoose.model<IBooksPersistence & mongoose.Document>('BooksMercado', BooksSchema);