const students = [50, 65, 80, 90, 45, 30]

function findTopper(students) {
    return Math.max(...students)
}

console.log(findTopper(students));