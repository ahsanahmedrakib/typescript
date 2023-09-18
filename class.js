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
var User1 = /** @class */ (function () {
    function User1(userName, age) {
        var _this = this;
        this.userName = userName;
        this.age = age;
        this.formatUser = function () {
            return _this.userName + " is " + _this.age + " years old.";
        };
    }
    return User1;
}());
var user3 = new User1("John", 20);
console.log(user3.formatUser());
