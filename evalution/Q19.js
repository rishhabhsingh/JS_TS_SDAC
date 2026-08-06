const course = ["JavaScript", "Python", "Java", "C++"]
function InvalidCourseException(course){
    try{
        if(!course.includes(course)){
            throw new Error("InvalidCourseException: Course not found");
        }
    }
    catch(error){
        console.error(error.message);
    }
}

console.log(InvalidCourseException(course))