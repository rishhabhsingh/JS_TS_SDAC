const numbers = [91, 56, 47, 41, 20]

const map = numbers.map( (num)=> {
    return num * num
} )
console.log(map)

const filter = numbers.filter( (num) => {
    return num % 2 == 1
})
console.log(filter)     

const reduce = numbers.reduce( (total, num) => {
    return total + num
})
console.log(reduce)
