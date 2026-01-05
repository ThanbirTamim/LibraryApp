# 📚 LibraryApp

**LibraryApp** is a simple **TypeScript console application** designed to demonstrate **object-oriented programming (OOP)** concepts and basic **file-based data persistence**. The app allows users to **add, view, borrow, and return books** in a library system. Each book has an **auto-generated ID**, a name, and a status (**Available** or **Borrowed**). All data is saved locally in a JSON file, enabling persistence across sessions.  

LibraryApp is ideal for **learning TypeScript, modular programming, and building console-based applications**, and it can be run directly using **ts-node** or compiled to JavaScript.

---

## ✨ Features

- Add books to the library (**auto-generated IDs**)  
- View all books with their ID and status  
- Borrow books  
- Return books  
- Data is saved and loaded using a JSON file (`books.json`)  

---

## 🗂 Folder Structure
LibraryApp/
├─ src/
│   ├─ Book.ts           # Book class
│   ├─ FileManager.ts    # File read/write helper
│   └─ Library.ts        # Library class (manages books)
├─ app.ts                # Main console application
├─ tsconfig.json         # TypeScript configuration
└─ launch.json           # Visual Studio debug configuration



> Compiled JavaScript files are generated in the `dist/` folder if TypeScript is compiled.

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd LibraryApp
npm install
npx ts-node app.ts
npx tsc        # Compile TypeScript to JavaScript
node dist/app.js
```


**Menu Options:**

- **Add Book**: Enter the book name. The ID is **auto-generated**.  
- **Show Books**: Displays all books with their **ID** and **status** (Available / Borrowed).  
- **Borrow Book**: Enter the book **ID** to borrow. Only available books can be borrowed.  
- **Return Book**: Enter the book **ID** to return. Only borrowed books can be returned.  
- **Exit**: Exit the application.

---

## 📦 Dependencies

- [TypeScript](https://www.typescriptlang.org/)  
- [ts-node](https://typestrong.org/ts-node/)  
- Node.js (v14+)  
- `@types/node` – Type definitions for Node.js

---

## 🗒 Notes

- All books are stored in a local JSON file (`books.json`) inside the `src` folder.  
- **IDs are automatically generated** to prevent duplicates.  
- Designed for **learning OOP concepts** and building **console-based TypeScript applications**.  
