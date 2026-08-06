function newEnrollment (newenrollment) {
    let batchlimit = 60
    try {
        if(newenrollment > batchlimit){
            throw new Error("Batch limit exceeded");
        }
    } catch (error) {
        console.error(error.message);
    }
}

function registerStudent(){
    try {
        newEnrollment(600)
    } catch (error) {
        console.error(error.message);
    }
}

registerStudent()
