const courseFees = [20000, 30000, 5000000, 6000000, 7000000]

//24a
const map = function (){
    return courseFees.map((fees)=>{
        return fees * 1000;
    })
}
console.log(map());

//24b
const filter = function (){
    return courseFees.filter((fees)=>{
        return fees > 5000000
    })
}
console.log(filter());

//24c
const reduce = function (){
    return courseFees.reduce((total, fees)=>{
        return total + fees
    })
}
console.log(reduce());
