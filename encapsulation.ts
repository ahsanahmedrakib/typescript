class User {
  readonly userName: string;
  public age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log("Username", this.userName, "Age", this.age);
  }
}

class Student extends User {
  private studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
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

  setStudentId(studentId: number): void {
    this.studentId = studentId;
  }

  getStudentId(): number {
    return this.studentId;
  }
}

let student1 = new Student("Student", 12, 1001);
student1.setStudentId(1001002);
console.log(student1.getStudentId());
student1.display();

let user1 = new User("User Name", 10);
console.log(user1.userName);
