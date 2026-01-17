function meth1(stock){
    if(stock == 0){
        throw new Error("Stock khatam hai!")
    }
}

function meth2(stock){
    meth1(stock)
}

function meth3(stock){
   try{
    meth2(stock)
   }
    catch(err){
    console.log("Pakda Gaya Badmosh: ")
    console.log(err.name + ": " + err.message)
    }
}
meth3(0)