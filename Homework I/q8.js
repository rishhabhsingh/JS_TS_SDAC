const students = [
    {
        name: "Shubham",
        scores: 85
    },
    {
        name: "Rahul",
        scores: 15 
    },
    {
        name: "Satish",
        scores: 45
    },
    {
        name: "Aditya",
        scores: 75
    }
]

const totalMarks = students.reduce((total, students) => {
    return total + students.scores
},0)

console.log(totalMarks)
