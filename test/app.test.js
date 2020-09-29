const Library = require('../models/Library');

test('That app does not have any errors', () => {
    let library = new Library();
    expect(library);
});
