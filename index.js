var userName;
userName = "Ahsan Ahmed Rakib";
function addNumbers(n1, n2) {
    console.log(n1 + n2);
}
// addNumbers(1, 2);
// console.log(userName);
// function signature
var userInfo1;
var userInfo2;
var userInfo3;
userInfo1 = function () {
    console.log("Rakib");
};
userInfo2 = function (name) {
    console.log(name);
};
userInfo3 = function (name, age) {
    return name + " " + age;
};
userInfo1();
userInfo2("Ahsan");
console.log(userInfo3("Ahmed", 20));
var user = {
    id: 1,
    name: "Ahsan",
    age: 10
};
var user0 = {
    id: 2,
    name: "Ahmed",
    age: 11
};
var users = [];
users.push(user);
users.push(user0);
var printUserInfo = function (user) {
    console.log("User ID: ", user.id + "." + " User Name: ", user.name + "." + " User Age: ", user.age);
};
users.forEach(function (user) { return printUserInfo(user); });
