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

    test('can borrow a copy of book from the library', () => {

        const user = new User(5, "adidi");
        const app = new App(library, user);
        const bookToBorrow = app.viewBooks()[0];

        let result = app.borrowBook(bookToBorrow);

        expect(result).toBeTruthy();

    });

    test('only one copy of book is left in library', () => {

        const user = new User(5, "adidi");
        const app = new App(library, user);
        const bookToBorrow = app.viewBooks()[0];
        const bookCopy = app.viewBooks()[3];

        let result = app.borrowBook(bookToBorrow);

        expect(result).toBeTruthy();

        expect(app.viewBooks()).toEqual(expect.arrayContaining([bookCopy]));
        expect(app.viewBooks()).toEqual(expect.not.arrayContaining([bookToBorrow]));
        expect(app.viewBorrowedBooks()).toEqual(expect.arrayContaining([bookToBorrow]));

    });

    test('copies of same books are removed from library when borrowed', () => {

        const user1 = new User(5, "adidi");
        const user2 = new User(6, "zino");

        const app = new App(library, user1);

        const bookToBorrow = app.viewBooks()[0];
        const bookCopy = app.viewBooks()[3];

        app.borrowBook(bookToBorrow);
        expect(app.viewBorrowedBooks()).toEqual(expect.arrayContaining([bookToBorrow]));

        app.user = user2;
        const result = app.borrowBook(bookCopy);

        expect(result).toBeTruthy();
        expect(app.viewBorrowedBooks()).toEqual(expect.arrayContaining([bookCopy]));
        expect(app.viewBooks()).toEqual(expect.not.arrayContaining([bookCopy, bookToBorrow]));

    });

    test('user cannot borrow more than one copy of same book', () => {

        const user = new User(5, "zino");
        const app = new App(library, user);

        const bookToBorrow = app.viewBooks()[0];
        const bookCopy = app.viewBooks()[3];

        app.borrowBook(bookToBorrow);

        expect(() => {
            app.borrowBook(bookCopy);
        }).toThrowError(new Error('Only one copy of book can be borrowed at any point in time'));

        expect(app.viewBooks()).toEqual(expect.arrayContaining([bookCopy]));
        expect(app.viewBorrowedBooks()).toEqual(expect.not.arrayContaining([bookCopy]));
        expect(app.viewBorrowedBooks().length).toBe(1);
        expect(app.viewBooks().length).toBe(3);
    });

});
