
class User{

    constructor(id, name){
        this.id = id || this.generateUserId();
        this.name = name;
    };

    generateUserId() {
        return Math.random().toFixed(4);
    }
}

module.exports = User;
