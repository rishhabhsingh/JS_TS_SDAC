//default parameter
const add = (a, b=0) => {
    return a + b;
}
console.log(add(2, 3))
console.log(add(2))

//rest parameter
const sum = (...numbers) => {
    return numbers.reduce( (total, num) => {
        return total + num
    }, 0);
}
console.log(sum(1, 2, 3, 4, 5))