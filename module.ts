import { studentName, studentAge as age } from "./student";

function displayInfo(): void {
  console.log("Student Name:", studentName + ",", "Student Age:", age);
}

displayInfo();
