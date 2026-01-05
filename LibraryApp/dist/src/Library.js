"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
const Book_1 = require("./Book");
const FileManager_1 = require("./FileManager");
class Library {
    constructor() {
        this.books = [];
        this.nextId = 1;
        this.load();
    }
    addBook(name) {
        const book = new Book_1.Book(this.nextId, name);
        this.books.push(book);
        this.nextId++;
        console.log("✅ Book added");
        this.save();
    }
    showBooks() {
        if (this.books.length === 0) {
            console.log("📭 No books in library");
            return;
        }
        console.log("\n📚 Library Books:");
        for (const book of this.books) {
            console.log(`${book.id}. ${book.name} - ${book.isBorrowed ? "Borrowed" : "Available"}`);
        }
    }
    borrowBook(id) {
        const book = this.books.find((b) => b.id === id);
        if (!book)
            return console.log("❌ Book not found");
        if (book.isBorrowed)
            console.log("⚠️ Already borrowed");
        else {
            book.isBorrowed = true;
            console.log("📖 Book borrowed");
            this.save();
        }
    }
    returnBook(id) {
        const book = this.books.find((b) => b.id === id);
        if (!book)
            return console.log("❌ Book not found");
        if (!book.isBorrowed)
            console.log("⚠️ Book was not borrowed");
        else {
            book.isBorrowed = false;
            console.log("🔁 Book returned");
            this.save();
        }
    }
    save() {
        FileManager_1.FileManager.saveBooks(this.books);
    }
    load() {
        const loaded = FileManager_1.FileManager.loadBooks();
        if (loaded.length > 0) {
            this.books = loaded;
            this.nextId = Math.max(...loaded.map((b) => b.id)) + 1;
        }
    }
}
exports.Library = Library;
