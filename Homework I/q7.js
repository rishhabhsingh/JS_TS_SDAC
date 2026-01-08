const students = [
    {
        name: "Shubham",
        scores: [85]
    },
    {
        name: "Amit",
        scores: [90]
    },
    {
        name: "Rahul",
        scores: [78]
    }
]

const filterStudentsByScore = students.filter((student) => {
    return student.scores > 80
})

console.log(filterStudentsByScore);