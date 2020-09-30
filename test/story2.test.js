const Library = require('../models/Library');
const User = require('../models/User');
const App = require('../App');

describe('User can borrow book from library', () => {

    let books;
    let library;

    beforeEach(() => {
        books = [
            {
                id: "B001",
                title: "The return of indiana jones"
            },
            {
                id: "B002",
                title: "Pair Programming Best Practices"
            },
            {
                id: "B003",
                title: "Test Driven Development vol 1"
            }
        ];
        library = new Library(books);
    });


    test('can borrow books from the library', () => {
        const user = new User(5, "adidi");
        const app = new App(library, user);
        const bookToBorrow = app.viewBooks()[0];

        let result = app.borrowBook(bookToBorrow);

        expect(result).toBe(true);
    });

    test('book is added to user borrowed list', () => {

        const user = new User(5, "adidi");
        const app = new App(library, user);
        const bookToBorrow = app.viewBooks()[0];

        const result = app.borrowBook(bookToBorrow);

        const userBorrowedList = app.viewBorrowedBooks();

        expect(result);
        expect(userBorrowedList).toEqual(expect.arrayContaining([bookToBorrow]));
        expect(userBorrowedList.length).toBe(1);

    });

    test('Book is removed from library', () => {

        const user = new User(5, "adidi");
        let app = new App(library, user);
        const bookToBorrow = app.viewBooks()[0];
        const noBooksInLibraryBefore = app.viewBooks().length;

        app.borrowBook(bookToBorrow);
        const remainingBooks = app.viewBooks();

        expect(remainingBooks < noBooksInLibraryBefore);
        expect(remainingBooks).toEqual(expect.not.arrayContaining([bookToBorrow]));

    });

    test('User cannot borrow more than two books', () => {

        const user = new User(5, "zino");
        let app = new App(library, user);
        const availableBooks = app.viewBooks();

        app.borrowBook(availableBooks[0]);
        app.borrowBook(availableBooks[1]);

        expect(() => {
            app.borrowBook(availableBooks[2]);
        }).toThrowError(new Error('User can not borrow more than 2 books'));

        expect(app.viewBorrowedBooks().length).toBe(2);
        expect(app.viewBooks().length).toBe(1);

    });
});
