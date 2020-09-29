
class User{

    constructor(id, name){
        this.id = id || generateUserId();
        this.name = name;
    };

    static generateUserId() {
        return Math.random().toFixed(4);
    }

}

module.exports = User;
