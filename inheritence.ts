class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log("Username", this.userName, "Age", this.age);
  }
}

class Student extends User {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(
      "Username",
      this.userName,
      "Age",
      this.age,
      "StudentId",
      this.studentId
    );
  }
}

let student1 = new Student("Student", 12, 1001);
student1.display();

let user1 = new User("John", 30);
user1.display();

// let user2 = new User("Alex", 4);
// user2.display();
