const employees = [
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

const filterEmployees = employees.filter((employee) => {
    return employee.salary > 450000
})

console.log(filterEmployees)