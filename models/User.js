
class User{

    constructor(id, name){
        this.id = id || generateUserId();
        this.name = name;
        this.borrowedList = [];
    };

    static generateUserId() {
        return Math.random().toFixed(4);
    }

    addToBorrowedList(book) {
        this.borrowedList.push(book);
    };

    getBorrowedList(){ return this.borrowedList };
}

module.exports = User;
