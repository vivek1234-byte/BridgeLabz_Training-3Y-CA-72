/*
 * Q3: Library Management System (Classes + Objects)
 * A Book class with issueBook() / returnBook().
 * Displays available books and lets a user issue a book by ISBN.
 */

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.ISBN = isbn;
        this.isIssued = false;
    }

    // Mark the book as issued (only if it is currently available)
    issueBook() {
        if (this.isIssued) {
            return `"${this.title}" is already issued.`;
        }
        this.isIssued = true;
        return `"${this.title}" has been issued successfully.`;
    }

    // Mark the book as returned
    returnBook() {
        if (!this.isIssued) {
            return `"${this.title}" was not issued.`;
        }
        this.isIssued = false;
        return `"${this.title}" has been returned.`;
    }
}

const library = [
    new Book("Clean Code", "Robert C. Martin", "978-0132350884"),
    new Book("Eloquent JavaScript", "Marijn Haverbeke", "978-1593279509"),
    new Book("You Don't Know JS", "Kyle Simpson", "978-1491904244"),
    new Book("The Pragmatic Programmer", "Andrew Hunt", "978-0201616224"),
];

// Show every book that is not issued
function displayAvailableBooks() {
    const available = library.filter((book) => !book.isIssued);
    console.log("\nAvailable books:");
    available.forEach((book) => console.log(`  - ${book.title} by ${book.author} (ISBN ${book.ISBN})`));
}

// Find a book by ISBN and issue it
function issueByISBN(isbn) {
    const book = library.find((b) => b.ISBN === isbn);
    if (!book) {
        console.log(`\nNo book found with ISBN ${isbn}.`);
        return;
    }
    console.log(`\n${book.issueBook()}`);
}

displayAvailableBooks();
issueByISBN("978-1593279509");   // issue Eloquent JavaScript
issueByISBN("978-1593279509");   // try again -> already issued
issueByISBN("000-0000000000");   // unknown ISBN
displayAvailableBooks();

// Return the book and show the list again
console.log("\n" + library[1].returnBook());
displayAvailableBooks();
