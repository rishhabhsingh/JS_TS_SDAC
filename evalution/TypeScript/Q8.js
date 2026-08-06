"use strict";
class Student {
    studentname;
    studentid;
    coursename;
    attendance;
    constructor(studentname, studentid, coursename, attendance) {
        this.studentname = studentname;
        this.studentid = studentid;
        this.coursename = coursename;
        this.attendance = attendance;
    }
    displayInfo() {
        console.log("Name:", this.studentname);
        console.log("ID:", this.studentid);
        console.log("Course:", this.coursename);
        console.log("Attendance:", this.attendance);
    }
}
let student1 = new Student("Rahul", 101, "CS", 80);
student1.displayInfo();
