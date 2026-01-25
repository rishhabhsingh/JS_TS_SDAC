"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
}
class Student extends Person {
    name;
    course;
    constructor(name, course) {
        super();
        this.name = name;
        this.course = course;
    }
    getDetails() {
        return `Name: ${this.name}, Course: ${this.course}`;
    }
    getRole() {
        return "Student";
    }
}
class Teacher extends Person {
    name;
    subject;
    constructor(name, subject) {
        super();
        this.name = name;
        this.subject = subject;
    }
    getDetails() {
        return `Name: ${this.name}, Subject: ${this.subject}`;
    }
    getRole() {
        return "Teacher";
    }
}
function printPersonDetails(person) {
    console.log(`Role: ${person.getRole()}`);
    console.log(person.getDetails());
}
const student = new Student("Jerry", "Computer Science");
const teacher = new Teacher("Arjun", "Mathematics");
printPersonDetails(student);
printPersonDetails(teacher);
//# sourceMappingURL=q4.js.map