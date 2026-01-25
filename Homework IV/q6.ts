function getStudentInfo<T>(info: T): T {
  return info
}

let studentName = getStudentInfo<string>("Rahul")
let studentId = getStudentInfo<number>(101)
let studentGrade = getStudentInfo<string>("A")

console.log("Student Name:", studentName)
console.log("Student ID:", studentId)
console.log("Student Grade:", studentGrade)