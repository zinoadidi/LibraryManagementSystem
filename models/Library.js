

class Library{
    constructor(books){
        this.books = books || [];
    };

    getBooks(){ return this.books };

    removeBook(book) {
        this.books = this.books.filter(function(e) { return e.id !== book.id });
    };

    addBook(book) {
        this.books.push(book);
    };

}

module.exports = Library;
