let userName: string;
userName = "Ahsan Ahmed Rakib";

function addNumbers(n1: number, n2: number) {
  console.log(n1 + n2);
}
// addNumbers(1, 2);
// console.log(userName);

// function signature

let userInfo1: () => void;
let userInfo2: (name: string) => void;
let userInfo3: (name: string, age: number) => string;

userInfo1 = () => {
  console.log("Rakib");
};
userInfo2 = (name: string) => {
  console.log(name);
};
userInfo3 = (name: string, age: number) => {
  return name + " " + age;
};

userInfo1();
userInfo2("Ahsan");
console.log(userInfo3("Ahmed", 20));

// interface

interface IUser {
  id: number;
  name: string;
  age: number;
}

let user: IUser = {
  id: 1,
  name: "Ahsan",
  age: 10,
};
let user0: IUser = {
  id: 2,
  name: "Ahmed",
  age: 11,
};

let users: IUser[] = [];

users.push(user);
users.push(user0);

const printUserInfo = (user: IUser) => {
  console.log(
    "User ID: ",
    user.id + "." + " User Name: ",
    user.name + "." + " User Age: ",
    user.age
  );
};

users.forEach((user) => printUserInfo(user));
