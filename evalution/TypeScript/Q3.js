"use strict";
class Course {
    coursename;
    courseId;
    duration;
    fees;
    constructor(name, courseId, duration, fees) {
        this.coursename = name;
        this.courseId = courseId;
        this.duration = duration;
        this.fees = fees;
    }
}
let c1 = new Course("CS", 101, 12, 1000);
console.log(c1);
