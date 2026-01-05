"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const Library_1 = require("./src/Library");
const readline = __importStar(require("readline"));
const library = new Library_1.Library();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function menu() {
    console.log(`
        📚 Library Management
        1. Add Book
        2. Show Books
        3. Borrow Book
        4. Return Book
        5. Exit
        `);
}
// Function to start console loop
function start() {
    menu();
    rl.question("Choose: ", answer => {
        if (answer === "1") {
            rl.question("Book name: ", name => {
                library.addBook(name);
                start(); // Loop back
            });
        }
        else if (answer === "2") {
            library.showBooks();
            start();
        }
        else if (answer === "3") {
            rl.question("Book ID to borrow: ", id => {
                library.borrowBook(Number(id));
                start();
            });
        }
        else if (answer === "4") {
            rl.question("Book ID to return: ", id => {
                library.returnBook(Number(id));
                start();
            });
        }
        else if (answer === "5") {
            console.log("👋 Goodbye!");
            rl.close();
        }
        else {
            console.log("❌ Invalid option");
            start();
        }
    });
}
// Start the app
//npx ts-node "E:\Random Project\LibraryApp\LibraryApp\app.ts"
start();
