"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    studentId;
    grade;
    address;
    constructor(name, studentId, grade, address) {
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
        this.address = address;
    }
    displayInfo() {
        console.log("Name:", this.name);
        console.log("Student ID:", this.studentId);
        console.log("Grade:", this.grade);
        console.log("Address:", this.address);
    }
}
class School {
    static totalStudents = 0;
    studentList = [];
    addStudent(student) {
        this.studentList.push(student);
        School.totalStudents++;
    }
    showStudents() {
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
//# sourceMappingURL=q2.js.map