function payment(){
    return new Promise((resolve, reject) => {
    if (success) {
        resolve("Promise Resolved Successfully")
    } else {
        reject("Promise Rejected")
    }
})
}

async function handlePromise() {
    try{
        const data = await payment(true)
        if(data){
            console.log(data)
        }
    }
    catch(error){
        console.log(error)
    }
}
handlePromise()