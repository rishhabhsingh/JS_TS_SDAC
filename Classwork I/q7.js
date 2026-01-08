const students = [
    {
        name: "Shubham",
        salary: [850000]
    },
    {
        name: "Amit",
        salary: [550000]
    },
    {
        name: "Rahul",
        salary: [450000]
    }
]

const filterStudentsByScore = students.filter((student) => {
    return student.salary > 450000
})

console.log(filterStudentsByScore)