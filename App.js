
class App{
    constructor(library, user){
        this.library = library;
        this.user = user;
    };

    viewBooks(){ return this.library.getBooks() };

    borrowBook(book) {
        if (this.user.getBorrowedList().length >= 2) {
            throw new Error('User can not borrow more than 2 books');
        }

        const existingBook = this.user.getBorrowedList()[0];

        if (existingBook && existingBook.bookCode === book.bookCode) {
            throw new Error('Only one copy of book can be borrowed at any point in time');
        }

        this.user.addToBorrowedList(book);
        this.library.removeBook(book);
        return true;
    };

    viewBorrowedBooks(){ return this.user.getBorrowedList() };
}

module.exports = App;

