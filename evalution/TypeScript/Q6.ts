function getCourseInfo<T>(info: T): T {
  return info
}

let courseName = getCourseInfo<string>("Rahul")
let courseId = getCourseInfo<number>(101)
let courseDuration = getCourseInfo<number>(12)
let courseFees = getCourseInfo<number>(1000)

console.log("Course Name:", courseName)
console.log("Course ID:", courseId)
console.log("Course Duration:", courseDuration)
console.log("Course Fees:", courseFees)