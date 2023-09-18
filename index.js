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
