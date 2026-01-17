function withdraw(amount){
    try{
        if(amount < 0){
            throw new Error("Amount cannot be negative")
        }
        console.log("Withdrawal successful.")
    }
    catch(err){
    console.log("An error occurred: " + err.message)
    }
}
withdraw(-100)
