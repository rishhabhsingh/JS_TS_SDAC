function checkRegister(course){
    try{
        if(!course){
            console.log("Missing Course Details");
        }
        else{
            console.log("Regisration Successfull")
        }
    }
    catch(err){
        console.log(err.message);
    }
    finally{
        console.log("Students Records are Updated!")
    }
} 
console.log(checkRegister("CS"))
 