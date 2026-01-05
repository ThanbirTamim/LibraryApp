import { Book } from "./Book";
import * as fs from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "books.json");

export class FileManager {
    static saveBooks(books: Book[]): void {
        fs.writeFileSync(filePath, JSON.stringify(books, null, 2), "utf-8");
    }

    static loadBooks(): Book[] {
        if (!fs.existsSync(filePath)) return [];
        const data = fs.readFileSync(filePath, "utf-8");
        const json = JSON.parse(data);
        return json.map((b: any) => new Book(b.id, b.name, b.isBorrowed));
    }
}
