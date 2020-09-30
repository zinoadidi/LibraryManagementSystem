const Library = require('../models/Library');
const User = require('../models/User');
const Book = require('../models/Book');
const App = require('../App');

describe('User can view books in the library', () => {

    let user = new User(2, "zino");
    let books = [
        new Book("B001",
           "The return of indiana jones",
           "001"
        ),
        new Book("B002",
            "Pair Programming Best Practices",
            "001"
        )
    ];


    test('can see empty list when there are no books in library', () => {

        let library = new Library([]);
        let app = new App(library, user);

        let result = app.viewBooks();
        expect(result.length).toBe(0);

    });

    test('can see list of books when books exist in library', () => {
        let library = new Library(books);
        let app = new App(library, user);

        let result = app.viewBooks();

        expect(result).toEqual(books);
        expect(result[0]).toEqual(expect.objectContaining(books[0]))
        expect(result.length).toBe(books.length);

    });

});

