const courseFees = [20000, 30000, 5000000, 6000000, 7000000]

function filterPremiumCourses(){
    return courseFees.filter((fees)=>{
        return fees > 5000000
    })
}
console.log(filterPremiumCourses());