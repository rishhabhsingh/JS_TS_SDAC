class Student {
  studentname: string;
  studentid: number;
  coursename: string;
  attendance: number;

  constructor(studentname: string, studentid: number,coursename: string, attendance: number) {
    this.studentname = studentname;
    this.studentid = studentid;
    this.coursename = coursename;
    this.attendance = attendance;
  }

  displayInfo(): void {
    console.log("Name:", this.studentname);
    console.log("ID:", this.studentid);
    console.log("Course:", this.coursename);
    console.log("Attendance:", this.attendance);
  }
}

let student1 = new Student("Rahul", 101, "CS", 80);
student1.displayInfo();
