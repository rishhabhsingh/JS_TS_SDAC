"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    isPresent;
    constructor(name) {
        this.name = name;
        this.isPresent = false;
    }
    markAttendance() {
        if (this.isPresent) {
            return `${this.name}'s attendance is already marked as present`;
        }
        else {
            this.isPresent = true;
            return `${this.name}'s attendance marked as present`;
        }
    }
}
const student = new Student("Jerry");
console.log(student.markAttendance());
//# sourceMappingURL=q5.js.map