var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("Username", this.userName, "Age", this.age);
    };
    return User;
}());
// class object
var user1 = new User("John", 30);
user1.display();
var user2 = new User("Alex", 4);
user2.display();
