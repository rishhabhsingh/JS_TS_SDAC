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
let s1 = new Student("Anjali", 201, "A", "Mumbai");
s1.displayInfo();
//# sourceMappingURL=q1.js.map