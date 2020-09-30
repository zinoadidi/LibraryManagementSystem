
class User{

    constructor(id, name){
        this.id = id || this.generateUserId();
        this.name = name;
        this.borrowedList = [];
    };

    generateUserId() {
        return Math.random().toFixed(4);
    }

    addToBorrowedList(book) {
        this.borrowedList.push(book);
    };

    removeFromBorrowedList(book) {
        this.borrowedList = this.borrowedList.filter(function(e) { return e.id !== book.id });
    };

    getBorrowedList(){ return this.borrowedList };
}

module.exports = User;
