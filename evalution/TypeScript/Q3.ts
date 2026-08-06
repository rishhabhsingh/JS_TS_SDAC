class Course {
  coursename: string;
  courseId: number;
  duration: number;
  fees: number;

  constructor(name: string, courseId: number, duration: number, fees: number) {
    this.coursename = name;
    this.courseId = courseId;
    this.duration = duration;
    this.fees = fees;
  }
}

let c1 = new Course("CS", 101, 12, 1000);
console.log(c1);
