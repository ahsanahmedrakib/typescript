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
