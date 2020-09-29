

class Library{
    constructor(books){
        this.books = books || [];
    };

    getBooks() {
        return this.books;
    }
}

module.exports = Library;
