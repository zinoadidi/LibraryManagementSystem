
class App{
    constructor(library, user){
        this.library = library;
        this.user = user;
    };

    viewBooks(){
        return this.library.getBooks();
    }

}

module.exports = App;

