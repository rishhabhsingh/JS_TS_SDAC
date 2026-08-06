const course = [100, 200, 300, 400, 500]

function findMostPopularCourse (){
    return Math.max(...course)
}

console.log(findMostPopularCourse ());
