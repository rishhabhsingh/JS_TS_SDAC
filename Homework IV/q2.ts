class Student {
  name: string;
  studentId: number;
  grade: string;
  address: string;

  constructor(name: string, studentId: number, grade: string, address: string) {
    this.name = name;
    this.studentId = studentId;
    this.grade = grade;
    this.address = address;
  }

  displayInfo(): void {
    console.log("Name:", this.name);
    console.log("Student ID:", this.studentId);
    console.log("Grade:", this.grade);
    console.log("Address:", this.address);
  }
}

class School {
  static totalStudents: number = 0;
  studentList: Student[] = [];

  addStudent(student: Student): void {
    this.studentList.push(student);
    School.totalStudents++;
  }

  showStudents(): void {
    for (let student of this.studentList) {
      student.displayInfo();
    }
  }
}

let s1 = new Student("Anjali", 201, "A", "Mumbai");

let school = new School();
school.addStudent(s1);

console.log("Total Students:", School.totalStudents);
school.showStudents();
