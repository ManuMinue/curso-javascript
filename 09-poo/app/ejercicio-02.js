class Book {
  constructor(title) {
    this.title = title;
    this.page = 1;
  }

  close() {
    this.page = 0;
  }

  nextPage() {
    ++this.page;
  }
}

const b = new Book("1984");
console.log(b.page); // 1
b.nextPage();
console.log(b.page); // 2
b.close();
console.log(b.page); // 0

class Library {
  constructor() {
    this.books = new Set();
  }

  addBook(book) {
    this.books.add(book);
  }

  findBooksByLetter(letter) {
    return [...this.books].filter((book) =>
      book.title.toLowerCase().startsWith(letter.toLowerCase())
    );
  }
}

const library = new Library();

library.addBook(b);
library.addBook(new Book("Pinoccio"));
library.addBook(new Book("Laura en el País de las Maravillas"));
library.addBook(new Book("Javier y los Pasos Perdidos"));
library.addBook(new Book("Las aventuras de Bienvenido"));

console.log(library.findBooksByLetter("L"));
