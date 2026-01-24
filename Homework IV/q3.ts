class Course {
  courseName: string;
  courseCode: string;
  instructor: string;

  constructor(courseName: string, courseCode: string, instructor: string) {
    this.courseName = courseName;
    this.courseCode = courseCode;
    this.instructor = instructor;
  }
}

let course1 = new Course("TypeScript", "TS101", "Mr. Kumar");
console.log(course1);
