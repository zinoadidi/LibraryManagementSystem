

class Library{
    constructor(books){
        this.books = books || [];
        this.borrowedBooks = [];
    };

    // decrement this book

    // refactor getBook, and rename

    getAvailableBooks(){
        return this.books.filter((e) => { return e.noOfCopies > 0 });
    };

    markBookAsBorrowed(borrowRequest){
        this.borrowedBooks.push(borrowRequest);

        this.books.forEach( (book) => {
            if(book.id === borrowRequest.bookId){
                book.noOfCopies--
                return
            }
        });
    }

    addBook(book) {
        this.books.push(book);
    };

    getBorrowedBooks(userId){
        const bookIds = this.borrowedBooks
            .filter((borrowedBook) => { return borrowedBook.userId === userId })
            .map((borrowedBook)=> borrowedBook.bookId);

        return this.books.filter((book) => bookIds.includes(book.id));
    }

    returnBorrowedBook(bookId, userId){
        this.borrowedBooks = this.borrowedBooks
            .filter((borrowedBook) => {
            return borrowedBook.bookId !== bookId || borrowedBook.userId !== userId;
        });

        this.books.forEach( (book) => {
            if(book.id === bookId){
                book.noOfCopies++
                return
            }
        });
    }
}

module.exports = Library;
