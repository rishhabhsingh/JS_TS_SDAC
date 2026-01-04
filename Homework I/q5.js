const studentMarks = [55, 78, 82, 40, 90]

const grades = studentMarks.map((mark) => {
  if (mark >= 80) {
    return "A"
  } else if (mark >= 60) {
    return "B"
  } else if (mark >= 40) {
    return "C"
  } else {
    return "F"
  }
})
console.log(grades)

const topStudents = studentMarks.filter((mark) => {
  return mark > 75
})
console.log(topStudents)


const totalMarks = studentMarks.reduce((total, mark) => {
  return total + mark
})
console.log(totalMarks)
