function checkRegister(course){
    try{
        if(!course){
            console.log("Missing Course Details");
        }
    }
    catch(err){
        console.log(err.message);
    }
} 
console.log(checkRegister(null));
 