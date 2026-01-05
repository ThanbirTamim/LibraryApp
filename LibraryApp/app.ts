import { Library } from "./src/Library";
import * as readline from "readline";

const library = new Library();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu(): void {
    console.log(`
        📚 Library Management
        1. Add Book
        2. Show Books
        3. Borrow Book
        4. Return Book
        5. Close
        `);
}

// Function to start console loop
function start(): void {
    menu();

    rl.question("Choose: ", answer => {
        if (answer === "1") {
            rl.question("Book name: ", name => {
                library.addBook(name);
                start(); // Loop back
            });
        } else if (answer === "2") {
            library.showBooks();
            start();
        } else if (answer === "3") {
            rl.question("Book ID to borrow: ", id => {
                library.borrowBook(Number(id));
                start();
            });
        } else if (answer === "4") {
            rl.question("Book ID to return: ", id => {
                library.returnBook(Number(id));
                start();
            });
        } else if (answer === "5") {
            console.log("👋 Goodbye!");
            rl.close();
        } else {
            console.log("❌ Invalid option");
            start();
        }
    });
}

// Start the app
//npx ts-node "E:\Random Project\LibraryApp\LibraryApp\app.ts"
start();
