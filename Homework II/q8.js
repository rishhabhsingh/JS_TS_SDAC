function updateProfile(){
    try{
        const userProfile = {name: "John Doe", age: 30, email: ""}
    }
    catch(err){
        console.log("Error occurred while saving profile: ")
        console.log(err.name + ": " + err.message)
    }
    finally{
        console.log("Execution of updateProfile is complete.")
    }
}
updateProfile()