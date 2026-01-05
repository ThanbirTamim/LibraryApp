"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(id, name, isBorrowed = false) {
        this.id = id;
        this.name = name;
        this.isBorrowed = isBorrowed;
    }
}
exports.Book = Book;
