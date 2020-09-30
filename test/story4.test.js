const Library = require('../models/Library');
const User = require('../models/User');
const App = require('../App');


describe('User can borrow a copy of book from library when there are two', () => {

    let books;
    let library;

    beforeEach(() => {
        books = [
            {
                id: "B001",
                title: "The return of indiana jones",
                bookCode: "001"
            },
            {
                id: "B002",
                title: "Pair Programming Best Practices",
                bookCode: "002"
            },
            {
                id: "B003",
                title: "Test Driven Development vol 1",
                bookCode: "003"
            },
            {
                id: "B004",
                title: "The return of indiana jones",
                bookCode: "001"
            }
        ];

        library = new Library(books);
    });

    test('can return book to library', () => {

        const user = new User(5, "adidi");
        const app = new App(library, user);

        app.borrowBook(app.viewBooks()[0]);
        let borrowedBook = app.viewBorrowedBooks()[0];
        result = app.returnBook(borrowedBook);

        expect(result).toBeTruthy();

    });

    test('returned book is removed from user list', () => {

        const user = new User(5, "adidi");
        const app = new App(library, user);

        app.borrowBook(app.viewBooks()[0]);
        app.borrowBook(app.viewBooks()[1]);

        let borrowedBook = app.viewBorrowedBooks()[0];
        result = app.returnBook(borrowedBook);

        expect(result).toBeTruthy();
        expect(app.viewBorrowedBooks().length).toBe(1);
        expect(app.viewBorrowedBooks()).toEqual(expect.not.arrayContaining([borrowedBook]));

    });

    test('library reflects returned book', () => {

        const user = new User(5, "adidi");
        const app = new App(library, user);

        app.borrowBook(app.viewBooks()[0]);
        app.borrowBook(app.viewBooks()[1]);

        let borrowedBook = app.viewBorrowedBooks()[0];

        result = app.returnBook(borrowedBook);

        expect(result).toBeTruthy();
        expect(app.viewBooks().length).toBe(3);
        expect(app.viewBooks()).toEqual(expect.arrayContaining([borrowedBook]));

    });

    test('user borrowed list is empty when all books are returned', () => {

        const user = new User(5, "adidi");
        const app = new App(library, user);

        app.borrowBook(app.viewBooks()[0]);
        app.borrowBook(app.viewBooks()[1]);

        let borrowedBook = app.viewBorrowedBooks();

        app.returnBook(borrowedBook[0]);
        app.returnBook(borrowedBook[1]);

        expect(app.viewBorrowedBooks().length).toBe(0);
        expect(app.viewBooks().length).toBe(4);
        expect(app.viewBooks()).toEqual(expect.arrayContaining(borrowedBook));

    });

});
