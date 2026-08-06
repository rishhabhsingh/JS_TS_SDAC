const fees = [2000, 3000, 5000]

const increaseCourseFees = function (){
    return fees.map((fee)=>{
        return fee * 15;
    })
}

console.log(increaseCourseFees());
