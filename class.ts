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
