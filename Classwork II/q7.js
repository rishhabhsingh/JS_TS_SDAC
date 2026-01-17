function meth1(){
    const pi = 3.14
    pi = 22/7
    console.log(pi)
}

function meth2(){
    meth1()
}

function meth3(){
   try{
    meth2()
   }
    catch(err){
    console.log("Pakda Gaya Badmosh: ")
    console.log(err.name + ": " + err.message)
    }
}
meth3()