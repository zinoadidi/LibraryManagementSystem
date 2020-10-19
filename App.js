const BorrowedBook = require('./models/BorrowedBook');

class App{
    constructor(library, user){
        this.library = library;
        this.user = user;
    };

    viewBooks(){ return this.library.getAvailableBooks() };

    borrowBook(bookId) {
        if (this.viewBorrowedBooks().length >= 2) {
            throw new Error('User can not borrow more than 2 books');
        }

        let borrowedBooksIds = this.viewBorrowedBooks().map((borrowedBook)=> borrowedBook.bookId);
        let isBookCopyAlreadyBorrowed = borrowedBooksIds.includes(bookId);
        if (isBookCopyAlreadyBorrowed) {
            throw new Error('Only one copy of book can be borrowed at any point in time');
        }

        let borrowRequest = new BorrowedBook(this.user.id, bookId);
        this.library.markBookAsBorrowed(borrowRequest);

        return true;
    };

    viewBorrowedBooks(){ return this.library.getBorrowedBooks(this.user.id) };

    returnBook(bookId) {
        this.library.returnBorrowedBook(bookId, this.user.id);
        return true;
    }
}

module.exports = App;

