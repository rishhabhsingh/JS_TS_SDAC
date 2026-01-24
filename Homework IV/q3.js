"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Course {
    courseName;
    courseCode;
    instructor;
    constructor(courseName, courseCode, instructor) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.instructor = instructor;
    }
}
let course1 = new Course("TypeScript", "TS101", "Mr. Kumar");
console.log(course1);
//# sourceMappingURL=q3.js.map