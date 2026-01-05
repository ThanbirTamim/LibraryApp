export class Book {
    id: number;
    name: string;
    isBorrowed: boolean;

    constructor(id: number, name: string, isBorrowed: boolean = false) {
        this.id = id;
        this.name = name;
        this.isBorrowed = isBorrowed;
    }
}
