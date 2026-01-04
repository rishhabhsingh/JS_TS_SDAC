function filterPassedStudents(marks) {
  return marks.filter((mark) => {
    return mark >= 40
  })
}

console.log(filterPassedStudents([30, 45, 60, 35, 80]))
