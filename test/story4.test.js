const Library = require('../models/Library');
const User = require('../models/User');
const Book = require('../models/Book');
const App = require('../App');


describe('User can borrow a copy of book from library when there are two', () => {

    let books;
    let library;

    beforeEach(() => {
        books = [
            new Book("B001",
                "The return of indiana jones",
                2
            ),
            new Book("B002",
                "Pair Programming Best Practices",
                2
            ),
            new Book("B003",
                "Test Driven Development vol 1",
                2
            )
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
        const result = app.returnBook(borrowedBook);

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
