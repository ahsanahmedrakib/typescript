class User {
  // properties
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log("Username", this.userName, "Age", this.age);
  }

  //methods
  // constructor
}

// class object
let user1 = new User("John", 30);
user1.display();

let user2 = new User("Alex", 4);
user2.display();

// interface in class

interface IUserFormatter {
  formatUser: () => string;
}

class User1 implements IUserFormatter {
  constructor(private userName: string, private age: number) {}

  formatUser = () => {
    return `${this.userName} is ${this.age} years old.`;
  };
}

let user3 = new User1("John", 20);
console.log(user3.formatUser());
