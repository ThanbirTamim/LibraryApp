import { Book } from "./Book";
import { FileManager } from "./FileManager";

export class Library {   // <-- MUST have "export" here
    books: Book[] = [];
    private nextId = 1;

    constructor() {
        this.load();
    }

    addBook(name: string): void {
        const book = new Book(this.nextId, name);
        this.books.push(book);
        this.nextId++;
        console.log("✅ Book added");
        this.save();
    }

    showBooks(): void {
        if (this.books.length === 0) {
            console.log("📭 No books in library");
            return;
        }
        console.log("\n📚 Library Books:");
        for (const book of this.books) {
            console.log(`${book.id}. ${book.name} - ${book.isBorrowed ? "Borrowed" : "Available"}`);
        }
    }

    borrowBook(id: number): void {
        const book = this.books.find((b: Book) => b.id === id);
        if (!book) return console.log("❌ Book not found");

        if (book.isBorrowed) console.log("⚠️ Already borrowed");
        else {
            book.isBorrowed = true;
            console.log("📖 Book borrowed");
            this.save();
        }
    }

    returnBook(id: number): void {
        const book = this.books.find((b: Book) => b.id === id);
        if (!book) return console.log("❌ Book not found");

        if (!book.isBorrowed) console.log("⚠️ Book was not borrowed");
        else {
            book.isBorrowed = false;
            console.log("🔁 Book returned");
            this.save();
        }
    }

    private save(): void {
        FileManager.saveBooks(this.books);
    }

    private load(): void {
        const loaded = FileManager.loadBooks();
        if (loaded.length > 0) {
            this.books = loaded;
            this.nextId = Math.max(...loaded.map((b: Book) => b.id)) + 1;
        }
    }
}
